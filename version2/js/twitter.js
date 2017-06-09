var contador= 140;

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
var restar=function(){
  var contenidoTexto = $("#area-texto");
  var maxletra=140;
  var minletra=0;
  minletra=contenidoTexto.val().length;
  var totalletra=maxletra-minletra;
  $("#contenedor").text(totalletra);



};

$(document).ready(function() {

  var botonAgregar = $("#agregar");
  var contenidoTexto = $("#area-texto");
  contenidoTexto.keyup(validarAreaTexto);
  contenidoTexto.keyup(restar);

  botonAgregar.click(function() {

    var publicaciones = $("#publicaciones");
    var texto = contenidoTexto.val();

    publicaciones.append("<p>" + texto + "</p>");




    texto = contenidoTexto.val("");
    $("#agregar").attr("disabled", true);

  });
});
