from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Business, Review, Image
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_required

review_routes = Blueprint('review', __name__)

# GET ALL REVIEWS BY CURRENT USER
@review_routes.route('/current')
@login_required
def reviews_current():
    print("current user", current_user)
    user_id = int(current_user.get_id())
    review_query = db.session.query(
        Review).filter(Review.owner_id == user_id)
    reviews = review_query.all()
    return {'reviews': [review.to_dict() for review in reviews]}

# GET REVIEW DETAILS BY ID
@review_routes.route('/<int:id>')
def get_review_details(id):
    # Single business
    review = Review.query.get(id).to_dict()

    if not review:
        return "Review does not exist", 404

    # Handle images
    images_query = db.session.query(Image).filter(Image.review_id == id)
    images = images_query.all()
    review['images'] = [image.to_dict() for image in images]

    return jsonify(review)





# UPDATE REVIEW
@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_review(id):

    review = Review.query.get(id)
    if not review:
        return "Review does not exist", 404

    data = request.get_json()
    if int(current_user.get_id()) == review.owner_id:
        review.review = data['review']
        review.stars = data['stars']

        db.session.commit()
        return review.to_dict()

    else:
        return "Review was unable to be updated", 403

# DELETE A REVIEW
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)

    if not review:
        return "Review does not exist", 404

    if int(current_user.get_id()) != review.owner_id:
        return "Review was unable to be deleted", 403

    db.session.delete(review)
    db.session.commit()
    return "Review has been deleted"
