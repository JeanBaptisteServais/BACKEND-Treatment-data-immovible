#ND for current dev in Frensh
"""We traiting csv data (property  value in France 2018)"""

import csv

#POSTGRES SQL
import psycopg2

#Configuration of my database
from database.config import DATABASE
from database.config import USER
from database.config import HOST
from database.config import PASSWORD


def database(type_infra, property_value, number_room,
             area, addresse1, addresse2, postal_code,
             communauty, lat, long):
    """
    We stock it into database PSYCHOPG2
    it serve to us for complementation tool and for js google map.
    We call the database
    (structure is on /data_treatment/database/database.py)
    """
    #ND: si vous voulez je peux le refaire sur votre database

    #connexion
    conn = psycopg2.connect(database=DATABASE,
                            user=USER,
                            host=HOST,
                            password=PASSWORD) 

    cur = conn.cursor()


    #sql ask
    cur.execute("""
              INSERT INTO Immobilier
                 (type_infra, property_value, number_room,
                  area, addresse1, addresse2, postal_code,
                  communauty, lat, long)
                  VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
                  """,(type_infra, property_value, number_room,
                       area, addresse1, addresse2, postal_code,
                       communauty, lat, long))


    conn.commit() 



def treatment_csv():
    """Open cvs property  value in France 2018"""

    #ND: Vous devait changer le path
    path = r"C:\Users\jeanbaptiste\Desktop\immo\immobilier\immo\static\data\full.csv"

    #We open the current csv data
    with open(path, newline='') as csvfile:
        #We read it
        reader = csv.DictReader(csvfile)
        c = 0
        
        for row in reader:

            
            #We only recup house and appartement
            if row['type_local'] in ("Maison", "Appartement") and\
               row['valeur_fonciere'] != "":
                c+=1
                if c > 8308:
                    #Insertion into database
                    try:
                        database(str(row['type_local']),
                                  int(row['valeur_fonciere']),
                                  int(row['nombre_pieces_principales']),
                                  int(row['surface_reelle_bati']),
                                  str(row['adresse_nom_voie']),
                                  str(row['adresse_suffixe']),
                                  str(row['code_postal']),
                                  str(row['nom_commune']),
                                  float(row['latitude']),
                                  float(row['longitude']))
                        
                    except:
                        pass
                
                
    print("data inserted; verify this:" +
          "/database/database_site/acces_to_database.py")



if __name__ == "__main__":
    treatment_csv()
