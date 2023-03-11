from flask import Blueprint, jsonify, request
from app.models import db, Image, Business, User
from .auth_routes import validation_errors_to_error_messages
from flask_login import current_user, login_required

image_routes = Blueprint('image', __name__)


# GET ALL IMAGES BY CURRENT USER
@image_routes.route('/current')
@login_required
def images_current():
    user_id = int(current_user.get_id())
    image_query = db.session.query(
        Image).filter(Image.owner_id == user_id)
    images = image_query.all()
    return {'images': {image.id: image.to_dict() for image in images}}


# DELETE IMAGES OWNED BY CURRENT USER
@image_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def images_delete(id):
    image = Image.query.get(id)

    if not image:
        return "Image does not exist", 404

    if int(current_user.get_id()) == image.owner_id:
        db.session.delete(image)
        db.session.commit()
        return "Item has been deleted"
    else:
        return "Image was unable to be deleted", 403

@image_routes.route('/<int:id>')
def get_image_details(id):
    image = Image.query.get(id).to_dict()
    if not image:
        return "Image does not exist", 404

    user = User.query.get(image["owner_id"])
    business = Business.query.get(image["business_id"])

    image["business_name"] = business.name
    image["user_first_name"] = user.first_name
    image["user_last_name"] = user.last_name

    return image
