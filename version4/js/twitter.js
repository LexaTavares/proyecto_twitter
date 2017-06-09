var contador = 140;

$("#contenedor").text(contador);

var validarAreaTexto = function() {
  var add = $("#agregar");
  if ($(this).val().trim().length > 0) {
    $("#contenedor").text(contador);
    contador--;
    add.removeAttr("disabled");
  } else {
    add.attr("disabled", true);
  }
};
var restar = function() {
  var contenidoTexto = $("#area-texto");
  var maxletra = 140;
  var minletra = 0;
  minletra = contenidoTexto.val().length;
  var totalletra = maxletra - minletra;
  $("#contenedor").text(totalletra);
  if (maxletra < minletra) {
    $("#agregar").attr("disabled", true);
  };
  if (minletra >= 120) {
    contenidoTexto.css("color", "blue");
    $("#contenedor").css("color", "blue");
    $("#contenedor").css("background-color", "lightgreen");
  } else {
    contenidoTexto.css("color", "black");
    $("#contenedor").css("color", "black");
    $("#contenedor").css("background-color", "white");
  };
  if (minletra >= 130) {
    contenidoTexto.css("color", "red");
    $("#contenedor").css("color", "red");
    $("#contenedor").css("background-color", "yellow");
  }
};

var alturaCajaTexto = function() {
  $(this).css("overflow", "hidden");
  $(this).css("height", "auto");
  $(this).height(this.scrollHeight);
};

$(document).ready(function() {

  var botonAgregar = $("#agregar");
  var contenidoTexto = $("#area-texto");
  var alturaTexto = $(".area-de-texto");

  contenidoTexto.keyup(validarAreaTexto);
  contenidoTexto.keyup(alturaCajaTexto);
  contenidoTexto.keyup(restar);


  botonAgregar.click(function() {

    var publicaciones = $("#publicaciones");
    var texto = contenidoTexto.val();

    publicaciones.append("<p>" + texto + "</p>");


    texto = contenidoTexto.val("");
    $("#agregar").attr("disabled", true);

  });
});
