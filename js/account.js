$(document).ready(function(){
  var $firstName = $('#first-name');
  var $lastName = $('#last-name'); 
  var $mailInput = $('#mail-input');
  var $inputAccount = $('.input-account');

  // Evento para guardar el first name
  $firstName.on('input', function(e){
    console.log($(this).val().length);
    localStorage.fistName = $(this).val();
  });

  // Evento para guardar el last name
  $lastName.on('input', function(e){
    console.log($(this).val());
    localStorage.lastName = $(this).val();
  });

  // Evento para guardar el email y verificar que sea email
  $mailInput.on('input', function(){
    localStorage.mail = $(this).val();
    var patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    console.log(patternEmail.test($(this).val()));
  });


  // Copio función pero en este caso que se verifyque solo letras
  // Al ponerlo funciona perfectamente
  // Se verifica un máximo de hasta 30 dígitos.
  $inputAccount.on('keypress', function(event){
    if (event.which < 65 || event.which > 122){
    // retorna falso porque no se ejecutará, con true se omite y aceptará letras
      return false;
    } else {
      return true;
    };
  });

  // Función para verificar el contenido
  if($firstName.val().length >=0){
    
    console.log('no hay nada')
  } else {
    console.log('es diferente de vacio')
  };
  

});