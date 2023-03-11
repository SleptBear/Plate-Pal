from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DecimalField
from wtforms.validators import DataRequired, Length, NumberRange, URL


class BusinessForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    category = StringField("Category", validators=[DataRequired()])
    address = StringField("Address", validators=[DataRequired()])
    city = StringField("City", validators=[DataRequired()])
    state = StringField("State", validators=[DataRequired()])
    zipcode = IntegerField("Zip Code", validators=[DataRequired()])
    phone_number = StringField("Phone Number", validators=[DataRequired()])
    website = StringField("Website", validators=[DataRequired(), URL()])
    lat = DecimalField("Latitude", places=7)
    lng = DecimalField("Longitude", places=7)
    price = IntegerField("Price")
    hours_of_operation = StringField("Hours of Operations", validators=[DataRequired()])
