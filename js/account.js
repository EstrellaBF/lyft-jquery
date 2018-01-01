$(document).ready(function(){
  var $firstName = $('#first-name');
  var $lastName = $('#last-name'); 
  var $mailInput = $('#mail-input');

  // Evento para guardar el first name
  $firstName.on('keyup', function(e){
    console.log($(this).val());
    localStorage.fistName = $(this).val();
  });

  // Evento para guardar el last name
  $lastName.on('keyup', function(e){
    console.log($(this).val());
    localStorage.lastName = $(this).val();
  });

  // Evento para guardar el email
  $mailInput.on('keyup', function(){
    localStorage.mail = $(this).val();
  });

  

});