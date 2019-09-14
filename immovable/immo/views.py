"""There is views from model MVC"""

from django.shortcuts import render
from django.http import HttpResponse

import psycopg2

from .config_database.config import DATABASE
from .config_database.config import USER
from .config_database.config import HOST
from .config_database.config import PASSWORD

from django.http import JsonResponse


def encoding_to(word):
    """Here we encoding our entrance
    to windows-1252. Our database has encoding
    charactere so we searching into this code"""

    word = word.encode("utf-8").decode("windows-1252")
    return word

def decoding_to(word):
    """Here we decoding our entrance
    to windows-1252. Our database has encoding
    charactere so we searching into this code"""

    word = word.encode("windows-1252").decode("utf-8")
    return word

def class_sql_to_str(liste):
    """Traiting out of sql for the answer js"""

    liste_treat = []
    
    for i in liste:
        liste_w = []
        for j in i:
            j = str(j)
            j = decoding_to(j)
            liste_w.append(j)#SQL return for ewample DECIMAL(1.156498)

        liste_treat.append(liste_w)#we transofrm j to string
        liste_treat.append(",")#we put "," for js response
    return liste_treat


def search_data_by_community(entrance, infra):
    """We search the entrance into our database
    by communauty"""

    conn = psycopg2.connect(database=DATABASE,
                            user=USER,
                            host=HOST,
                            password=PASSWORD) 
    cur = conn.cursor()

    if infra == "":
        cur.execute("""SELECT property_value, type_infra, number_room,
                      area, addresse1, addresse2, postal_code,
                      communauty, lat, long FROM Immobilier
                      WHERE LOWER(communauty) = LOWER(%s)""",
                      (entrance, ))

    else:
        cur.execute("""SELECT property_value, type_infra, number_room,
                      area, addresse1, addresse2, postal_code,
                      communauty, lat, long FROM Immobilier
                      WHERE LOWER(communauty) = LOWER(%s)
                      AND LOWER(type_infra) = LOWER(%s)""",
                      (entrance, infra))

    liste = []
    liste = cur.fetchall()
    liste_treat = class_sql_to_str(liste)

    return liste_treat




def home(request):
    """Home template"""

    if request.method == "POST":
        data = request.POST.get('data')#recup data localisation
        infra = request.POST.get('infra')#recup data infra

        search = encoding_to(data)#encoding data
        out = search_data_by_community(search, infra)#recup data from database

        if out == []:
            return HttpResponse("Oups nous n'avons pas donnée voir nos données ?")
        
        return HttpResponse(out)



    return render(request, 'home.html')













