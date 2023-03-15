from flask import Blueprint, jsonify, request
from app.models import db, Business, Review, Image, User
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_required
from app.forms.images_form import ImageForm

review_routes = Blueprint('review', __name__)


# GET ALL REVIEWS BY CURRENT USER
@review_routes.route('/current')
@login_required
def reviews_current():
    user_id = int(current_user.get_id())
    review_query = db.session.query(
        Review).filter(Review.owner_id == user_id)
    reviews = [review.to_dict() for review in review_query.all()]

    for review in reviews:
        images_query = db.session.query(Image).filter(
            Image.review_id == review["id"])
        images = images_query.all()
        review["images"] = [image.to_dict() for image in images]

    return {'userReviews': {review["id"]: review for review in reviews}}


# GET REVIEW DETAILS BY ID
@review_routes.route('/<int:id>')
def get_review_details(id):
    review = Review.query.get(id).to_dict()
    if not review:
        return {
            "errors": "Review couldn't be found",
            "status_code": 404
        }, 404
    business = Business.query.get(review["business_id"]).to_dict()
    owner = User.query.get(review["owner_id"]).to_dict()

    images_query = db.session.query(Image).filter(Image.review_id == id)
    images = images_query.all()
    review['images'] = [image.to_dict() for image in images]
    review['business_name'] = business["name"]
    review['owner_first_name'] = owner["first_name"]
    review['owner_last_name'] = owner["last_name"]

    return jsonify(review)


# CREATE NEW IMAGE FOR A REVIEW
@review_routes.route('/<int:id>/images', methods=['POST'])
@login_required
def create_new_image(id):
    review = Review.query.get(id)
    if not review:
        return {
            "errors": "Review couldn't be found",
            "status_code": 404
        }, 404

    if int(current_user.get_id()) != review.owner_id:
        return {
            "errors": "Forbidden",
            "status_code": 403
        }, 403

    form = ImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = request.get_json()
    if form.validate_on_submit():
        new_image = Image(
            owner_id=int(current_user.get_id()),
            business_id=review.business_id,
            review_id=id,
            url=data['url'],
            caption=data['caption']
        )
        db.session.add(new_image)
        db.session.commit()
        return new_image.to_dict()
    if form.errors:
        return {
            "message": "Validation error",
            "statusCode": 400,
            'errors': validation_errors_to_error_messages(form.errors)}, 400


# UPDATE REVIEW
@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_review(id):

    review = Review.query.get(id)
    if not review:
        return {
            "errors": ["Review couldn't be found"],
            "status_code": 404
        }, 404

    data = request.get_json()
    if int(current_user.get_id()) == review.owner_id:
        review.review = data['review']
        review.stars = data['stars']

        db.session.commit()
        return review.to_dict()

    else:
        return {
            "errors": ["You are not allowed to edit this review"],
            "status_code": 403
        }, 403


# DELETE A REVIEW
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    if not review:
        return {
            "errors": "Review couldn't be found",
            "status_code": 404
        }, 404

    if int(current_user.get_id()) != review.owner_id:
        return {
            "errors": "Forbidden",
            "status_code": 403
        }, 403

    db.session.delete(review)
    db.session.commit()
    return {
        "message": "Successfully deleted",
        "status_code": 200
    }
