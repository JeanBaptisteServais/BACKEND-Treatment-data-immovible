#ND for current dev in Frensh
"""Here we create sql tables"""
#ND: je peux vous faire le changement sur votre base de donnée.


#POSTGRES SQL
import psycopg2 

#My config
from config import DATABASE
from config import USER
from config import HOST
from config import PASSWORD


def creation_table():
    """For the price of appartement or house in m^2
    address, number of room,
    lattitude and longitude for google map"""

    #connexion
    conn = psycopg2.connect(database=DATABASE,
                            user=USER,
                            host=HOST,
                            password=PASSWORD) 
    cur = conn.cursor()

    #sql ask
    cur.execute("""
                CREATE TABLE Immobilier(
                    id serial PRIMARY KEY,
                    type_infra VARCHAR(11),
                    property_value INT,
                    number_room INT,
                    area INT,
                    addresse1 VARCHAR(255),
                    addresse2 VARCHAR(255),
                    postal_code VARCHAR(255),
                    communauty VARCHAR(255),
                    lat INT,
                    long INT);
                """)

    conn.commit() 

    print("database built")

if __name__ == "__main__":
    creation_table()
