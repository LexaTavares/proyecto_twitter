$(document).ready(function(){

  var botonAgregar= $("#agregar");
  var contenidoTexto= $("#area-texto");

    botonAgregar.click(function (){
      var publicaciones=$("#publicaciones");
      var texto= contenidoTexto.val();

       publicaciones.append("<p>" + texto + "</p>");
       console.log();
       texto=contenidoTexto.val("");
  });

});
