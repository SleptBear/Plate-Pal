from app.models import db, Image, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_images():
    db.session.add(Image(
        url='https://www.gannett-cdn.com/presto/2019/09/12/PPHX/4ffba913-0cdb-4392-ab6e-5fee33214566-uscp-772hgxx4kwp1ld5d2bxe_original.jpg',
        owner_id=1,
        business_id=1
    ))

    db.session.add(Image(
        url='https://media.30seconds.com/tip/lg/A-meal-at-Mamas-Fish-House-in-Maui-is-an-experience-you-wo-17844-246dc34323-1549663420.jpg',
        owner_id=2,
        business_id=2
    ))

    db.session.add(Image(
        url='https://images.otstatic.com/prod/26238986/3/huge.jpg',
        owner_id=3,
        business_id=3
    ))

    db.session.add(Image(
        url='https://www.opentable.com/blog/wp-content/uploads/sites/108/2021/07/girl-and-the-goat_122841254_708529073128116_5731424708196087464_n.png',
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
        owner_id=4,
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
        owner_id=1,
        business_id=4,
        review_id=10
    ))

    db.session.add(Image(
        url="https://www.theworlds50best.com/discovery/filestore/jpg/CommandersPalace-NewOrleans-USA-01.jpg",
        owner_id=1,
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
        owner_id=1,
        business_id=7,
        review_id=19
    ))

    db.session.add(Image(
        url="https://s3-media0.fl.yelpcdn.com/bphoto/pRvaKZbCIa5I0CWMJHNMOw/l.jpg",
        owner_id=1,
        business_id=8,
        review_id=22
    ))

    db.session.add(Image(
        url="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg",
        owner_id=1,
        business_id=9,
        review_id=25
    ))

    db.session.add(Image(
        url="https://www.mvnews.org/wp-content/uploads/2021/01/IMG_1994-e1611290526672-900x675.jpeg",
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
        url="https://pyxis.nymag.com/v1/imgs/d3a/f6d/0fb2880fb715ea70e2735832258a563773-26-blue-hill-at-stone-barns.jpg",
        owner_id=2,
        business_id=12,
        review_id=34
    ))

    db.session.add(Image(
        url="https://cdn.vox-cdn.com/thumbor/0kqfADvlg6vaobVA4UhRBLIj7h8=/0x17:380x302/1200x800/filters:focal(0x17:380x302)/cdn.vox-cdn.com/uploads/chorus_image/image/38941530/bar_20la_20grassa.0.jpg",
        owner_id=3,
        business_id=13,
        review_id=37
    ))

    db.session.add(Image(
        url="https://www.theworlds50best.com/discovery/filestore/jpg/Coi-SanFrancisco-USA-01.jpg",
        owner_id=4,
        business_id=14,
        review_id=40
    ))

    db.session.add(Image(
        url="https://www.theworlds50best.com/discovery/filestore/jpg/OsteriaMozza-LosAngeles-USA-03.jpg",
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
