from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, URL
from app.models import User


def extension_check(form, field):
    # Checking if user exists
    url = field.data
    if not url.endswith('.jpeg'):
        raise ValidationError('URL does not end in a valid extension')

class ImageForm(FlaskForm):
    url = StringField('url', validators=[DataRequired(), URL(), extension_check])
    caption = StringField('caption')
