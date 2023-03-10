from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_reviews():

Review(
review="The food was excellent and the service was great. The ambiance was also very nice. I highly recommend this place for a special occasion.",
stars=5,
owner_id=1,
business_id=1,
),

Review(
review="The food was good, but the service was slow. It took a while for our order to be taken and for the food to arrive. Overall, an okay experience.",
stars=3,
owner_id=2,
business_id=1,
),

Review(
review="The food was terrible and the service was even worse. I would not recommend this place to anyone.",
stars=1,
owner_id=3,
business_id=1,
),

Review(
review="This was the best seafood I have ever had! The fish was so fresh and the preparation was amazing. The view from the restaurant was also stunning.",
stars=5,
owner_id=4,
business_id=2,
),

Review(
review="The food was good, but the service was a bit slow. We had to wait a while for our order to be taken and for our food to arrive. Overall, an okay experience.",
stars=3,
owner_id=5,
business_id=2,
),

Review(
review="The food was terrible and the service was even worse. I would not recommend this place to anyone.",
stars=1,
owner_id=6,
business_id=2,
),

Review(
    review="Husk is one of my favorite restaurants in Charleston! The food is delicious and the service is always great. Highly recommend the shrimp and grits and the fried chicken.",
    stars=5,
    owner_id=7,
    business_id=3,
)

Review(
    review="I had a great time at Husk! The food was amazing and the staff was very friendly and accommodating. Highly recommend the pimento cheese and the pork belly.",
    stars=4,
    owner_id=8,
    business_id=3,
)

Review(
    review="Husk is a must-visit if you're in Charleston. The atmosphere is cozy and welcoming, and the food is simply amazing. Highly recommend the short rib and the collard greens.",
    stars=5,
    owner_id=9,
    business_id=3,
)

Review(
review="One of my favorite restaurants in Chicago. The menu is creative and always changing. I've never had a bad dish here. The cocktails are great too!",
stars=5,
owner_id=1,
business_id=4,
),

Review(
review="This place was amazing! The menu is a bit overwhelming, but everything we tried was absolutely delicious. Highly recommend the pig face and goat empanadas. The cocktails were also excellent.",
stars=4,
owner_id=2,
business_id=4,
),

Review(
review="Girl & the Goat is a must-visit restaurant in Chicago. The food is amazing and the atmosphere is lively. I highly recommend trying the roasted cauliflower and the green beans. The service is also excellent.",
stars=5,
owner_id=3,
business_id=4,
)

Review(
review="Commander's Palace is an institution in New Orleans and for good reason. The food is outstanding and the service is impeccable. Don't miss the turtle soup or the bread pudding soufflé.",
stars=5,
owner_id=1,
business_id=5,
),

Review(
review="A classic New Orleans restaurant with a beautiful setting and impeccable service. The food is on point, from the gumbo to the pecan-crusted Gulf fish. Highly recommend!",
stars=4,
owner_id=2,
business_id=5,
),

Review(
review="Commander's Palace is a must-visit in New Orleans. The service is impeccable and the food is outstanding. Don't miss the turtle soup and the pecan pie!",
stars=5,
owner_id=3,
business_id=5,
),

Review(
review="Per Se is an unforgettable dining experience. The food is incredible and the service is top-notch. Definitely worth the price. Highly recommend the foie gras and the truffle risotto.",
stars=5,
owner_id=1,
business_id=6,
),

Review(
review="This was one of the best meals of my life. Every dish was executed perfectly and the service was impeccable. Don't miss the caviar service and the wagyu beef.",
stars=5,
owner_id=2,
business_id=6,
),

Review(
review="Per Se is a once-in-a-lifetime dining experience. The food is incredible and the service is flawless. Highly recommend the tasting menu with wine pairings.",
stars=5,
owner_id=3,
business_id=6,
),

Review(
review="Canlis is a Seattle institution and for good reason. The food is outstanding and the view is unbeatable. Don't miss the crab cakes or the duck.",
stars=5,
owner_id=1,
business_id=7,
),

Review(
review="This was one of the best meals I've had in Seattle. The food was amazing and the service was impeccable. Highly recommend the steak and the salmon.",
stars=4,
owner_id=2,
business_id=7,
),

Review(
review="Canlis is a must-visit in Seattle. The food is outstanding and the service is top-notch. Don't miss the wagyu beef or the soufflé for dessert.",
stars=5,
owner_id=3,
business_id=7,
),

Review(
review="Zuni Cafe is a fantastic restaurant! The food is delicious, and the atmosphere is great. I had the roasted chicken, and it was so juicy and flavorful. The staff is friendly and attentive. Highly recommend!",
stars=5,
owner_id=1,
business_id=8,
),

Review(
review="Zuni Cafe has amazing food and a great atmosphere. I came here for brunch and had the eggs benedict, which were perfectly cooked. The coffee is also top-notch. Would definitely come back!",
stars=4,
owner_id=2,
business_id=8,
),

Review(
review="I had a wonderful dinner at Zuni Cafe. The menu had so many great options, and everything we ordered was delicious. The staff was friendly and attentive, and the restaurant has a cozy and inviting atmosphere. Highly recommend!",
stars=5,
owner_id=3,
business_id=8,
),

Review(
review="Hattie B's Hot Chicken is amazing! The chicken is perfectly cooked and seasoned, and the sides are delicious as well. The staff is friendly and the atmosphere is great. Highly recommend!",
stars=5,
owner_id=1,
business_id=9,
),
Review(
review="I love Hattie B's Hot Chicken! The spice level is perfect, and the chicken is always cooked to perfection. The sides are also amazing. Would definitely recommend!",
stars=4,
owner_id=2,
business_id=9,
),
Review(
review="Hattie B's Hot Chicken is the best! The chicken is juicy and flavorful, and the sides are amazing. The staff is friendly and the atmosphere is great. Highly recommend!",
stars=5,
owner_id=3,
business_id=9,
),

Review(
review="The Capital Grille is a top-notch steakhouse! The steak was cooked perfectly to my liking and the sides were amazing as well. The service was fantastic and the atmosphere is great. Highly recommend!",
stars=5,
owner_id=1,
business_id=10,
),
Review(
review="I had a great experience at The Capital Grille! The steak was perfectly cooked and the sides were delicious. The staff was friendly and attentive. Would definitely come back!",
stars=4,
owner_id=2,
business_id=10,
),
Review(
review="The Capital Grille is a great steakhouse! The steak was delicious and the sides were amazing. The service was fantastic and the atmosphere is great. Highly recommend!",
stars=5,
owner_id=3,
business_id=10,
),

Review(
review="Alinea is an amazing restaurant! The food is not only delicious but also a work of art. The staff is friendly and attentive, and the atmosphere is great. Highly recommend!",
stars=5,
owner_id=1,
business_id=11,
),

Review(
review="Alinea is a culinary masterpiece! The food is not only delicious but also an experience. The staff is friendly and attentive, and the atmosphere is great. Highly recommend!",
stars=5,
owner_id=2,
business_id=11,
),

Review(
review="I had a fantastic dining experience at Alinea! The food is amazing and the presentation is beautiful. The staff is friendly and attentive, and the atmosphere is great. Highly recommend!",
stars=5,
owner_id=3,
business_id=11,
),


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
