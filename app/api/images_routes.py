from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Image
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
    return {'images': [image.to_dict() for image in images]}


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
