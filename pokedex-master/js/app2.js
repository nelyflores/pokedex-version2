var cargarPagina = function () {
  cargarPersonajes();
  $(document).on("click",".activator", mostrarDetalles);
};
var cargarPersonajes = function () {
  var url = "http://pokeapi.co/api/v2/pokemon-species/";
  $.getJSON(url, function (response) {
    var personajes=response.results;
    mostrarPersonajes(personajes);
  })
};

var plantillaPokemon=
'<div class="col s12 m6 l3">' +
  '<div class="card ">'+
    '<div class="card-image waves-effect waves-block waves-light">'+
      '<img src="img/--nombre--.png">'+
    '</div>'+
    '<div class="card-content">'+
      '<span class="card-title activator grey-text text-darken-4" data-url="__urlpersonaje__">--nombre--<i class="material-icons right">more_vert</i></span>'+
    '</div>'+
    '<div class="card-reveal habilidades" >'+
      '<span class="card-title grey-text text-darken-4" name="first_name">--nombre--<i class="material-icons right">close</i></span>'+
      '<p class="texto-habilidades">--habilidades--</p>'+
    '</div>'+
  '</div>'+
'</div>';

var mostrarPersonajes =function(personajes) {
  var plantillaFinal="";
  personajes.forEach(function (personaje) {
    plantillaFinal += plantillaPokemon.replace("--nombre--",personaje.name)
    .replace("--nombre--",personaje.name)
    .replace("--nombre--",personaje.name)
    .replace("__urlpersonaje__",personaje.url)
  });
  $(".pokedex").html(plantillaFinal);
}

var mostrarDetalles=function(){
  var url = $(this).data("url");
  var $habilidades = $(this).parents(".card").find(".texto-habilidades");
  // var $habilidades = $(".habilidades");
  console.log($habilidades);
  $.getJSON(url,function(response){
    console.log(response.genera[0].genus);
    $habilidades.html("Habitat: "+response.habitat.name +'</br>'+"Color: "+ response.color.name + '<br>'+"Tipo: "+response.shape.name + '</br>' +"Genero: "+ response.genera[0].genus);
    // $habilidades.html(plantillaPokemon.replace("--habilidades--",response.habitat.name + response.color.name));
  });
}
$(document).ready(cargarPagina);
