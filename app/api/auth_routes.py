from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    if "email : Email provided not found." in validation_errors_to_error_messages(form.errors) or "password : No such user exists." in validation_errors_to_error_messages(form.errors) or "password : Password was incorrect." in validation_errors_to_error_messages(form.errors):
        return {
            "message": "Invalid credentials",
            "statusCode": 401,
            'errors': validation_errors_to_error_messages(form.errors)}, 401
    return {
        "message": "Validation error",
        "statusCode": 400,
        'errors': validation_errors_to_error_messages(form.errors)}, 400


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print(form.data)
    if form.validate_on_submit():
        user = User(
            first_name=form.data['first_name'],
            last_name=form.data['last_name'],
            zipcode=form.data['zipcode'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    if "email : Email address is already in use." in validation_errors_to_error_messages(form.errors):
        return {
            "message": "Email already exists",
            "statusCode": 403,
            'errors': validation_errors_to_error_messages(form.errors)}, 403
    return {
        "message": "Validation error",
        "statusCode": 400,
        'errors': validation_errors_to_error_messages(form.errors)}, 400


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {
        "errors": "Authentication required",
        "status_code": 401
    }, 401
