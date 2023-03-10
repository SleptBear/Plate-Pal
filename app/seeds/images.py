from app.models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_images():
    db.session.add(Image(
        url='https://lh3.googleusercontent.com/p/AF1QipNiq_d4WYqKcBFxdeD7Bcwef9GAxooKFuy4U_xw=s680-w680-h510',
        owner_id=1,
        business_id=1
    ))

    db.session.add(Image(
        url='https://s.hdnux.com/photos/01/31/51/50/23501360/5/rawImage.jpg',
        owner_id=2,
        business_id=2
    ))

    db.session.add(Image(
        url='https://images.otstatic.com/prod/26238986/3/huge.jpg',
        owner_id=3,
        business_id=3
    ))

    db.session.add(Image(
        url='https://assets3.thrillist.com/v1/image/2994209/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
        owner_id=4,
        business_id=4
    ))

    db.session.add(Image(
        url='https://upload.wikimedia.org/wikipedia/commons/6/62/2009-0301-NOLA-001-CommandersPalace.jpg',
        owner_id=5,
        business_id=5
    ))

    db.session.add(Image(
        url='https://upload.wikimedia.org/wikipedia/commons/5/52/PerSe.jpg',
        owner_id=1,
        business_id=6
    ))

    db.session.add(Image(
        url='http://canlis.com/uploads/moonrise_01.jpg',
        owner_id=2,
        business_id=7
    ))

    db.session.add(Image(
        url='https://upload.wikimedia.org/wikipedia/commons/1/18/Zuni_Cafe_in_San_Francisco.jpg',
        owner_id=3,
        business_id=8
    ))

    db.session.add(Image(
        url='https://photos.smugmug.com/USA/Tennessee/Nashville/i-PMFhcCS/0/536b1ddd/L/Nashville-281-L.jpg',
        owner_id=4,
        business_id=9
    ))

    db.session.add(Image(
        url='https://media-cdn.tripadvisor.com/media/photo-s/16/78/ee/a0/photo0jpg.jpg',
        owner_id=5,
        business_id=10
    ))

    db.session.add(Image(
        url='https://images.squarespace-cdn.com/content/v1/6091adceeec0df416e2b512e/1620245306638-QYQC5XJMNTCP2GI41SLQ/20160429_gilsonAlinea_0005.jpg',
        owner_id=1,
        business_id=11
    ))

    db.session.add(Image(
        url='https://images.squarespace-cdn.com/content/v1/6179d6754688ca3b03aec8ba/1635374727535-172DRD3TMH93CQQ6BLJU/BLG_PRIVATE-DINING-ROOM.jpg?format=1000w',
        owner_id=2,
        business_id=12
    ))

    db.session.add(Image(
        url='https://www.theworlds50best.com/discovery/filestore/jpg/Coi-SanFrancisco-USA-01.jpg',
        owner_id=3,
        business_id=13,
    ))

    db.session.add(Image(
        url='https://www.theworlds50best.com/discovery/filestore/jpg/OsteriaMozza-LosAngeles-USA-03.jpg',
        owner_id=4,
        business_id=14,
    ))

    db.session.add(Image(
        url='https://pyxis.nymag.com/v1/imgs/d3a/f6d/0fb2880fb715ea70e2735832258a563773-26-blue-hill-at-stone-barns.jpg',
        owner_id=5,
        business_id=15,
    ))

    db.session.add(Image(
        url="https://media-cdn.tripadvisor.com/media/photo-s/12/9f/38/2a/niman-ranch-prime-filet.jpg",
        owner_id=1,
        business_id=1,
        review_id=1
    ))

    db.session.add(Image(
        url="https://images.prismic.io/mamas-fish-house/f532d545-6ac8-4a4a-87a0-8f104e9624f2_hero_stuffedfish_topview.jpg?auto=compress,format",
        owner_id=2,
        business_id=2,
        review_id=4
    ))

    db.session.add(Image(
        url="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/11/19/1/FN_Husk-Cheeseburger_s4x3.jpg.rend.hgtvcom.616.462.suffix/1416447467125.jpeg",
        owner_id=3,
        business_id=3,
        review_id=7
    ))

    db.session.add(Image(
        url="https://images.otstatic.com/prod1/42082637/2/huge.jpg",
        owner_id=4,
        business_id=4,
        review_id=10
    ))

    db.session.add(Image(
        url="https://www.theworlds50best.com/discovery/filestore/jpg/CommandersPalace-NewOrleans-USA-01.jpg",
        owner_id=5,
        business_id=5,
        review_id=13
    ))

    db.session.add(Image(
        url="https://www.thomaskeller.com/sites/default/files/styles/2_3_screen/public/media/franchises/food_drink_images/tk.com_perse_menu-main3.new_.jpg?itok=3PEHyCiX",
        owner_id=1,
        business_id=6,
        review_id=16
    ))

    db.session.add(Image(
        url="https://images.seattletimes.com/wp-content/uploads/2022/03/03142022_canlissnacks_161527.jpg?d=780x543",
        owner_id=2,
        business_id=7,
        review_id=19
    ))

    db.session.add(Image(
        url="https://s3-media0.fl.yelpcdn.com/bphoto/pRvaKZbCIa5I0CWMJHNMOw/l.jpg",
        owner_id=3,
        business_id=8,
        review_id=22
    ))

    db.session.add(Image(
        url="https://www.seriouseats.com/thmb/wc-CgN0yYUBJZGzrf6Bs5ozm9iA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__08__20140826-fried-and-true-hattie-bs-hot-chicken-evan-sung-812d8599262148aaa9732285fb8d2dbe.jpg",
        owner_id=4,
        business_id=9,
        review_id=25
    ))

    db.session.add(Image(
        url="https://media-cdn.tripadvisor.com/media/photo-s/16/78/ee/a0/photo0jpg.jpg",
        owner_id=5,
        business_id=10,
        review_id=28
    ))

    db.session.add(Image(
        url="https://images.squarespace-cdn.com/content/v1/6091adceeec0df416e2b512e/1620245306638-QYQC5XJMNTCP2GI41SLQ/20160429_gilsonAlinea_0005.jpg",
        owner_id=1,
        business_id=11,
        review_id=31
    ))

    db.session.add(Image(
        url="https://images.squarespace-cdn.com/content/v1/6179d6754688ca3b03aec8ba/1635374727535-172DRD3TMH93CQQ6BLJU/BLG_PRIVATE-DINING-ROOM.jpg?format=1000w",
        owner_id=2,
        business_id=12,
        review_id=34
    ))

    db.session.add(Image(
        url="https://www.theworlds50best.com/discovery/filestore/jpg/Coi-SanFrancisco-USA-01.jpg",
        owner_id=3,
        business_id=13,
        review_id=37
    ))

    db.session.add(Image(
        url="https://www.theworlds50best.com/discovery/filestore/jpg/OsteriaMozza-LosAngeles-USA-03.jpg",
        owner_id=4,
        business_id=14,
        review_id=40
    ))

    db.session.add(Image(
        url="https://pyxis.nymag.com/v1/imgs/d3a/f6d/0fb2880fb715ea70e2735832258a563773-26-blue-hill-at-stone-barns.jpg",
        owner_id=5,
        business_id=15,
        review_id=43
    ))

    db.session.commit()

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.


def undo_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()
