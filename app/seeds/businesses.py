from app.models import db, Business, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_businesses():

    b1 = Business(
        name="Cafe Monarch",
        owner_id=1,
        category="American (New)",
        address="6939 E 1st Ave",
        city="Scottsdale",
        state="AZ",
        zipcode=85251,
        phone_number="(480) 970-7682",
        website="https://cafemonarch.com/",
        lat=33.491239,
        lng=-111.927899,
        price=4,
        hours_of_operation="M: 5pm-10pm, T : 5pm-10pm, W: 5pm-10pm, R : 5pm-10pm, F : 5pm-10pm, S : 5pm-10pm, S  : Closed"
    )

    b2 = Business(
        name="Mama's Fish House",
        owner_id=2,
        category="Seafood",
        address="799 Poho Pl",
        city="Paia",
        state="HI",
        zipcode=96779,
        phone_number="(808) 579-8488",
        website="https://www.mamasfishhouse.com/",
        lat=20.937370,
        lng=-156.372400,
        price=4,
        hours_of_operation="M: 11am-9pm, T : 11am-9pm, W: 11am-9pm, R : 11am-9pm, F : 11am-9pm, S : 11am-9pm, S  : 11am-9pm"
    )

    b3 = Business(
        name="Husk",
        owner_id=3,
        category="Southern",
        address="76 Queen St",
        city="Charleston",
        state="SC",
        zipcode=29401,
        phone_number="(843) 577-2500",
        website="https://huskrestaurant.com/charleston/",
        lat=32.779766,
        lng=-79.929982,
        price=3,
        hours_of_operation="M: 11am-2:30pm, 5pm-10pm, T : 11am-2:30pm, 5pm-10pm, W: 11am-2:30pm, 5pm-10pm, R : 11am-2:30pm, 5pm-10pm, F : 11am-2:30pm, 5pm-10pm, S : 10am-2pm, 5pm-10pm, S  : 10am-2pm"
    )

    b4 = Business(
        name="Girl & the Goat",
        owner_id=4,
        category="American (New)",
        address="809 W Randolph St",
        city="Chicago",
        state="IL",
        zipcode=60607,
        phone_number="(312) 492-6262",
        website="https://www.girlandthegoat.com/",
        lat=41.884265,
        lng=-87.648165,
        price=3,
        hours_of_operation="M: 4pm-11pm, T : 4pm-11pm, W: 4pm-11pm, R : 4pm-11pm, F : 4pm-12am, S : 4pm-12am, S  : 4pm-10pm"
    )

    b5 = Business(
        name="Commander's Palace",
        owner_id=5,
        category="Southern",
        address="1403 Washington Ave", city="New Orleans",
        state="LA",
        zipcode=70130,
        phone_number="(504) 899-8221",
        website="https://www.commanderspalace.com/",
        lat=29.927746,
        lng=-90.077614,
        price=4,
        hours_of_operation="M: 11:30am-2pm, 5:30pm-9pm, T : 11:30am-2pm, 5:30pm-9pm, W: 11:30am-2pm, 5:30pm-9pm, R : 11:30am-2pm, 5:30pm-9pm, F : 11:30am-2pm, 5:30pm-10pm, S : 10am-1pm, 5:30pm-10pm, S  : 10am-1pm, 5:30pm-9pm"
    )

    b6 = Business(
        name="Per Se",
        owner_id=1,
        category="French",
        address="10 Columbus Cir #4",
        city="New York",
        state="NY",
        zipcode=10019,
        phone_number="(212) 823-9335",
        website="https://www.thomaskeller.com/perseny",
        lat=40.768026,
        lng=-73.983013,
        price=4,
        hours_of_operation="M: Closed, T : Closed, W: 5:30pm-9pm, R : 5:30pm-9pm, F : 5:30pm-9:30pm, S : 5:30pm-9:30pm, S  : 5:30pm-9pm"
    )

    b7 = Business(
        name="Canlis",
        owner_id=2,
        category="American (New)",
        address="2576 Aurora Ave N",
        city="Seattle",
        state="WA",
        zipcode=98109,
        phone_number="(206) 283-3313",
        website="https://canlis.com/",
        lat=47.646214,
        lng=-122.345195,
        price=4,
        hours_of_operation="M: 5pm-9pm, T : 5pm-9pm, W: 5pm-9pm, R : 5pm-9pm, F : 5pm-10pm, S : 5pm-10pm, S  : 5pm-9pm"
    )

    b8 = Business(
        name="Zuni Cafe",
        owner_id=3,
        category="California Cuisine",
        address="1658 Market St",
        city="San Francisco",
        state="CA",
        zipcode=94102,
        phone_number="(415) 552-2522",
        website="https://zunicafe.com/",
        lat=37.774166,
        lng=-122.423874,
        price=3,
        hours_of_operation="M: 11:30am-11pm, T : 11:30am-11pm, W: 11:30am-11pm, R : 11:30am-11pm, F : 11:30am-11pm, S : 11:30am-11pm, S  : 11:30am-11pm"
    )

    b9 = Business(
        name="Hattie B's Hot Chicken",
        owner_id=4,
        category="Southern",
        address="112 19th Ave S",
        city="Nashville",
        state="TN",
        zipcode=37203,
        phone_number="(615) 678-4794",
        website="https://hattieb.com/",
        lat=36.144328,
        lng=-86.801197,
        price=2,
        hours_of_operation="M: 11am-9pm, T : 11am-9pm, W: 11am-9pm, R : 11am-9pm, F : 11am-10pm, S : 11am-10pm, S  : 11am-4pm"
    )

    b10 = Business(
        name="The Capital Grille",
        owner_id=5,
        category="Steakhouse",
        address="444 Brickell Ave",
        city="Miami",
        state="FL",
        zipcode=33131,
        phone_number="(305) 374-4500",
        website="https://www.thecapitalgrille.com/home",
        lat=25.768456,
        lng=-80.188407,
        price=3,
        hours_of_operation="M: 11:30am-9pm, T : 11:30am-9pm, W: 11:30am-9pm, R : 11:30am-9pm, F : 11:30am-10pm, S : 5pm-10pm, S  : 5pm-9pm"
    )

    b11 = Business(
        name="Alinea",
        owner_id=1,
        category="Molecular Gastronomy",
        address="1723 N Halsted St",
        city="Chicago",
        state="IL",
        zipcode=60614,
        phone_number="(312) 867-0110",
        website="https://www.alinearestaurant.com/",
        lat=41.913400,
        lng=-87.648465,
        price=4,
        hours_of_operation="M: Closed, T : Closed, W: 5pm-9pm, R : 5pm-9pm, F : 5pm-9pm, S : 5pm-9pm, S  : Closed"
    )

    b12 = Business(
        name="Blue Hill at Stone Barns",
        owner_id=2,
        category="Farm-to-Table",
        address="630 Bedford Rd",
        city="Tarrytown",
        state="NY",
        zipcode=10591,
        phone_number="(914) 366-9600",
        website="https://www.bluehillfarm.com/food/blue-hill-stone-barns",
        lat=41.097361,
        lng=-73.833918,
        price=4,
        hours_of_operation="M: 5pm-9:30pm, T : 5pm-9:30pm, W: 5pm-9:30pm, R : 5pm-9:30pm, F : 5pm-9:30pm, S : 5pm-9:30pm, S  : 5pm-9:30pm"
    )

    b13 = Business(
        name="Bar La Grassa",
        owner_id=3,
        category="Italian",
        address="800 N Washington Ave",
        city="Minneapolis",
        state="MN",
        zipcode=55401,
        phone_number="(612) 333-3837",
        website="http://www.barlagrassa.com/",
        lat=44.986282,
        lng=-93.275968,
        price=2,
        hours_of_operation="M: 4pm-9pm, T : 4pm-9pm, W: 4pm-9pm, R : 4pm-9pm, F : 4pm-9pm, S : 4pm-9pm, S  : 4pm-9pm"
    )

    b14 = Business(
        name="Coi",
        owner_id=4,
        category="Californian",
        address="373 Broadway",
        city="San Francisco",
        state="CA",
        zipcode=94133,
        phone_number="(415) 393-9000",
        website="https://coirestaurant.com/",
        lat=37.798359,
        lng=-122.407456,
        price=4,
        hours_of_operation="W: 5:30pm-8:30pm, R : 5:30pm-8:30pm, F : 5:30pm-8:30pm, S : 5:30pm-8:30pm, S  : 5:30pm-8:30pm, M: Closed, T : Closed"
    )

    b15 = Business(
        name="Osteria Mozza",
        owner_id=5,
        category="Italian",
        address="6602 Melrose Ave",
        city="Los Angeles",
        state="CA",
        zipcode=90038,
        phone_number="(323) 297-0100",
        website="https://www.osteriamozza.com/",
        lat=34.083249,
        lng=-118.329703,
        price=3,
        hours_of_operation="M: 5pm-10pm, T : 5pm-10pm, W: 5pm-10pm, R : 5pm-10pm, F : 5pm-10pm, S : 5pm-10pm, S  : 5pm-10pm"
    )

    db.session.add(b1)
    db.session.add(b2)
    db.session.add(b3)
    db.session.add(b4)
    db.session.add(b5)
    db.session.add(b6)
    db.session.add(b7)
    db.session.add(b8)
    db.session.add(b9)
    db.session.add(b10)
    db.session.add(b11)
    db.session.add(b12)
    db.session.add(b13)
    db.session.add(b14)
    db.session.add(b15)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_businesses():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.businesses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM businesses"))

    db.session.commit()
