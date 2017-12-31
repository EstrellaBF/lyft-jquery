$(document).ready(function(){
  var $test = $('#test')

  // Añade el codigo del país seleccionado en la página signup
  $test.text(localStorage.codeNumber);
});