var memory;

function rab() {
  var e_html = document.getElementById('zone_affichage');
  e_html.value="";
}
function calcul() {
  var e_html = document.getElementById('zone_affichage'); // on recupere l'element
  try {
    e_html.value=eval(e_html.value);
  }
catch(err) {
    document.getElementById("zone_affichage").innerHTML = err.message;
}
}
function affiche(b) {
  var e_html = document.getElementById('zone_affichage');
  e_html.value=e_html.value+b.value;
}
function init() {
  var boutons = document.getElementsByClassName('bouton_simple');
  for (var i = 0; i < boutons.length; i++) {
    boutons[i].setAttribute('onclick','affiche(this)');
  }
}
function plusmoins(){
    var e_html = document.getElementById('zone_affichage');
    if (e_html.value.charAt(0)=='-')
    {
      e_html.value=e_html.value.substr(1,e_html.value.length-1);
    }
    else {
      e_html.value='-'+e_html.value;
    }
}

function range_memory() {
  var e_html = document.getElementById('zone_affichage');
  memory=e_html.value;
}

function affiche_memory() {
  var e_html = document.getElementById('zone_affichage');
  e_html.value=e_html.value + memory;
}
function raz_memory() {
    memory = "";
}
