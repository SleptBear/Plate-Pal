from flask import Blueprint, jsonify, request
from app.models import db, Business, Review, Image
from .auth_routes import validation_errors_to_error_messages
from datetime import datetime

activity_routes = Blueprint('activity', __name__)

@activity_routes.route('/')
def get_activity():
    businesses = [business.to_dict() for business in  Business.query.all()]
    reviews = [review.to_dict() for review in  Review.query.all()]

    for review in reviews:
        images_query = db.session.query(Image).filter(
            Image.review_id == review['id'])
        images = images_query.all()
        review['images'] = [image.to_dict() for image in images]

    for business in businesses:
        images_query = db.session.query(Image).filter(
            Image.business_id == business['id'])
        images = images_query.all()
        business['images'] = [image.to_dict() for image in images]

    return {"activity": reviews + businesses}
