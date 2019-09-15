
len_appartement = 0
appartement = 0

len_room_house = 0
room_house = 0

len_room_appart = 0
room_apart = 0

len_area_house = 0
area_house = 0
len_area_appart = 0
area_appart = 0

k_maison = false
k_appart = false

addresse_name = ""

var_w = 0
counter = 0


//RE INITIALIZATION OF GLOBAL
function empty_global(){
  len_maison = 0
  maison = 0
  len_appartement = 0
  appartement = 0

  len_room_house = 0
  room_house = 0

  len_room_appart = 0
  room_apart = 0

  len_area_house = 0
  area_house = 0
  len_area_appart = 0
  area_appart = 0

  k_maison = false
  k_appart = false

  addresse_name = ""

  var_w = 0
  counter = 0

};


//***************************USER PRESSED BUTTON********************************
//WE RECUP IF USER SEARCH HOUSE OR APPARTEMENT
function type_infra(type){
    varTypeInfra = type;
};


//WE RECUP DATA INFRA FROM INPUT
function recup_data(div_name){
    var recuperation = document.getElementById(div_name).value;
    return recuperation;
};


//*************************DURING AJAX CALL**************************************
//UNDISPLAY FUNCTION
function undisplay(div){
  document.getElementById(div).style.display = "none";
};

//DISPLAY FUNCTION
function display(div){
  document.getElementById(div).style.display = "block";
};

//FIRST PART OF AJAX
function first_part_AJAX_ONE(){
  var recup = recup_data("entrance_address"); // Recup value from input

  display("loading") // displaying loading logo
  undisplay("infra")//display infra inputs
  undisplay("entrance_address")//undisplay inputs search
  undisplay("button_valid_search")//undisplay button search

  return recup
};


//*********************************AJAX FUNCTIONS********************************
//AJAX CALL FOR MAP
$("#button_valid_search").on("click", function(e){

  recup = first_part_AJAX_ONE()

  $.ajax({
    data:{
      'infra':varTypeInfra,
      'data':recup,
      csrfmiddlewaretoken:'{{csrf_token}}'
    },
      type:"POST",
  })
  .done(function(data){
      if (data.error){
          {}
      }
      else{
          verification = no_data(data);
          if(verification == true){
            no_data2()
          }
          else{
            end_of_first_ajax_call(data);
        };
      };
  });
});




//*************************END AJAX CALL*******************************************

                          //****NO DATA*****

function no_data(data){
    if(data == "Oups nous n'avons pas donnée voir nos données ?"){
        return true
    }
    else{
        return false
    }
};

function no_data2(){
    undisplay("loading");
    var text = "oops nous n'avons rien la dessus <input type='button' value='Voir nos data' id='see_data'>";
    document.getElementById("nos_data").innerHTML = text;
    display("text_search"); // displaying text of result
    display("div_search2");
};



                      //*****DATA*****


//MAP INITIALISATION
function initMap(lattitude_data, longitude_data){
    var options = {
        zoom:15,
        center:{lat:lattitude_data, lng:longitude_data}
    }
    var map = new google.maps.Map(document.getElementById("map"), options);
};



//END FIRST CALL AJAX
function end_of_first_ajax_call(data){
    display("loading") // displaying loading logo

    undisplay("loading")//display infra inputs
    undisplay("div_map")//elete picture
    
    undisplay("entrance_address")//Start input
    undisplay("button_valid_search")//Start button
    
    display("map") // displaying map
    display("text_search") // displaying text of result

    treatment_data_http(data)// treat data from ajax return
    recup_data_ajax()// recup lat and long data for google map
    initMap(lattitude_data, longitude_data); // put google map

};



//**************************************TREATMENT DATA FROM VIEWS.PY**********************************

//WE ENTRANCE DATA FROM SQL INTO AN ARRAY ------------------------------------------> STEP 1
function treatment_data_http(data){

    var increment = ""
    var list = []
    for(var i = 0; i < data.length + 1; i++){
        if(data[i] == "[" || data[i] == "]" || data[i]  == "'"){
            {}
        }else if(data[i] == ","){
            list.push(increment)
            increment = ""
            counter = 0
        }else{
            increment += data[i]
        }
    }
    treatData.push(list);
};


//PART 1 search lattitude and longitude ------------------------------------------> STEP 2.1
function recup_lat_and_long(counter, treatData){

    if(counter == 8){
        lattitude_data = parseFloat(treatData)
    }
    if(counter == 9){
        longitude_data = parseFloat(treatData)
    }
};


//PART 2 search price immovable ----------------------------------------------------> STEP2 2.2
function recup_price_immovable(counter, treatData){
  
  if(counter == 0){
      var_w += parseInt(treatData)
  }
  if(counter == 1 && treatData == " Maison"){
      maison += var_w
      len_maison += 1
      var_w = 0
      k_maison = true
  }else if(counter == 1 && treatData == " Appartement"){
      appartement += var_w
      len_appartement += 1
      var_w = 0
      k_appart = true
  }
};



//PART 3 search area number of room  ----------------------------------------------------> STEP2 2.3
function number_room(counter, treatData){
  if(counter == 2){
      if(k_appart == true){
          len_room_appart += 1
          room_apart += parseInt(treatData)
      }else if(k_maison == true){
          len_room_house += 1
          room_house += parseInt(treatData)
      }
  }
  if(counter == 2){
      if(k_appart == true){
          len_room_appart += 1
          room_apart += parseInt(treatData)
      }else if(k_maison == true){
          len_room_house += 1
          room_house += parseInt(treatData)
      }
   }

};


//PART 4 search area immovable  -----------------------------------------------------------> STEP2 2.4
function area_immovable(counter, treatData){
  if(counter == 3){
      if(k_appart == true){
          len_area_appart += 1
          area_appart += parseInt(treatData)
          k_appart = false
      }else if(k_maison == true){
          len_area_house += 1
          area_house += parseInt(treatData)
          k_maison = false
      }
   }
};


//PART 5 search addresse ----------------------------------------------------------------------> STEP2 2.5
function addresse_name_situation(counter, treatData){
    if(counter == 7){
      addresse_name = treatData
  }
};


//WE DISPLAY THE RESULT WE GET -----------------------------------------------------------------> STEP2 2.6
function display_result_under_logo_house(appartement, len_appartement, maison, len_maison,
                        room_apart, len_room_appart, room_house, len_room_house,
                        area_appart, len_area_appart, area_house, len_area_house,
                        addresse_name){

    //Now we displaying it !!
    var appart_price = Math.round(appartement/len_appartement) + " euros en moyenne";
    var house_price = Math.round(maison/len_maison) + " euros en moyenne";
    var piece_house = Math.round(room_apart/len_room_appart) + " pièce en moyenne";
    var piece_aprt = Math.round(room_house/len_room_house) + " pièce en moyenne";
    var area_aprt = Math.round(area_appart/len_area_appart) + " mètre carré en moyenne";
    var area_houise = Math.round(area_house/len_area_house) + " mètre carré en moyenne";

    document.getElementById("appartement_prix").innerHTML = appart_price;
    document.getElementById("maison_prix").innerHTML = house_price;

    document.getElementById("piece_appart").innerHTML = piece_house;
    document.getElementById("piece_maison").innerHTML = piece_aprt

    document.getElementById("area_appart").innerHTML = area_aprt;
    document.getElementById("area_maison").innerHTML = area_houise;
    document.getElementById("dress").innerHTML = addresse_name;
};



//RECUP DATA FROM treatData TREATED -----------------------------------------------------------> STEP 3 
function recup_data_ajax(){

    for(var i = 0; i < treatData.length; i++){
        for(var j = 0; j < treatData[i].length; j++){

            //part of lattitude and longitude where COUNT = 0
            recup_lat_and_long(counter, treatData[i][j])

            //part of price where COUNT = 1
            recup_price_immovable(counter, treatData[i][j])

            //part of number of room where COUNT = 2
            number_room(counter, treatData[i][j])

            //part of room where COUNT = 3
            area_immovable(counter, treatData[i][j])

            //part of addresse name where COUNT = 7
            addresse_name_situation(counter, treatData[i][j])

          
            //We empty to -1 the counter where COUNTER = 9
            if(counter == 9){
                counter = -1
            }
            counter += 1
        }
    }

    //Now we displaying it !!
    display_result_under_logo_house(appartement, len_appartement, maison, len_maison,
                                    room_apart, len_room_appart, room_house, len_room_house,
                                    area_appart, len_area_appart, area_house, len_area_house,
                                    addresse_name);
};





//*************************DURING SECOND AJAX CALL***********************************


//UNINDISPLAY LAST RESULT
function unindisplay_last_result(){
    document.getElementById("appartement_prix").innerHTML = "";
    document.getElementById("maison_prix").innerHTML = "";
    document.getElementById("piece_appart").innerHTML = "";
    document.getElementById("piece_maison").innerHTML = ""
    document.getElementById("area_appart").innerHTML = "";
    document.getElementById("area_maison").innerHTML = "";
    document.getElementById("dress").innerHTML = "";
};


//FIRST PART SECOND AJAX CALL
function first_part_AJAX_TWO(){
  
  treatData = [] //Raise the array who contains data
  var recup = recup_data("entrance_address2"); // Recup value from input

  undisplay("text_search"); 
  undisplay("div_search2");//undisplay input and button of second search
  undisplay("map"); // displaying loading logo

  unindisplay_last_result();
  empty_global();

  display("loading"); // displaying loading logo
  display("div_map")

  
  document.getElementById("nos_data").innerHTML = ""

  return recup
};




//*************************SECOND CALL AJAX***********************************
//AJAX CALL THE SECOND INPUT
$("#button_valid_search2").on("click", function(e){

  recup = first_part_AJAX_TWO()

  $.ajax({
    data:{
      'infra':varTypeInfra,
      'data':recup,
      csrfmiddlewaretoken:'{{csrf_token}}'
    },
      type:"POST",
  })
  .done(function(data){
      if (data.error){
          {}
      }
      else{
          verification = no_data(data);
          if(verification == true){
            no_data2()
          }
          else{
            end_of_SECOND_AJAX_CALL_END(data);
        };
      };
  });
});




//*******************************END SECOND AJAX CALL***********************************

function end_of_SECOND_AJAX_CALL_END(data){
    undisplay("loading"); // displaying loading logo
    undisplay("div_map");//undisplay input and button of second search

    display("map");//undisplay input and button of second search
    display("text_search"); // displaying text of result
    display("div_search2");

    treatment_data_http(data)// treat data from ajax return
    recup_data_ajax()// recup lat and long data for google map
    initMap(lattitude_data, longitude_data); // put google map
}




//****************************NO DATA AJAX CALL***********************************

$("#button_valid_search2").on("click", function(e){

  recup = first_part_AJAX_TWO()

  $.ajax({
    data:{
      'infra':varTypeInfra,
      'data':recup,
      csrfmiddlewaretoken:'{{csrf_token}}'
    },
      type:"POST",
  })
  .done(function(data){
      if (data.error){
          {}
      }
      else{
          verification = no_data(data);
          if(verification == true){
            no_data2()
          }
          else{
              end_of_SECOND_AJAX_CALL_END(data);
        };
      };
  });
});


//******************AJAX PROTECTION**********************************************
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});




//********************************ESTHETIC FUNCTIONS*************************************


//***********GLOBAL VARIABLE***********
sec_one = find_pos_div("immovable_presentation");
sec_five = find_pos_div("information");
sec_two = find_pos_div("picture_info");
sec_three = find_pos_div("text_info2");
sec_fourth = find_pos_div("text_info3");
sec_six = find_pos_div("recherche");


//***********POSITION OF DIV FUNCTIONS***********

//function who find pos of div
function find_pos_div(our_div){
  var Y = document.getElementById(our_div).offsetTop;
  return Y
};

//display function
function display_design(div){
  document.getElementById(div).style.visibility = "visible";
};


//On scroll on the page do something
$(window).scroll(function() {

  //Recup current position
  var position = $(window).scrollTop()

  //If position is -200 of sec_one display the div !
  if(position > sec_one - 200){
    window.setTimeout('display_design("immovable_presentation")', 100);

  //If position is -200 of sec_five display the div !
  }if(position > sec_five - 200){
      display_design("information")
      window.setTimeout('display_design("picture_info")', 300);
      window.setTimeout('display_design("text_info3")', 600);
      window.setTimeout('display_design("text_info2")', 900);

  //If position is -200 of sec_six display the div !
  }if(position > sec_six - 200){
      display_design("recherche")
  }
});

