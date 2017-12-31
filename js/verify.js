$(document).ready(function(){
  var $phoneCode = $('#phone-code')
  var $next = $('#button-next');
  var $verifyCode = $('#verify-code');
  console.log($next);

  // desabilitando boton next *AVERIGUAR SI TRAE COMPLICACIONES TENER EL MISMO ID EN ARCHIVOS DIFERENTES SIN ENLAZARSE*
  $next.prop('disabled', true);

  // Añade el codigo del país seleccionado y el número ingresado en la página signup
  $phoneCode.text('Enter the code send to: ' + localStorage.codeNumber + ' ' + localStorage.phoneNumber);



  // cambio keypress por keyup no detecta caracteres especiales pero si el acsii 
  $verifyCode.on('keypress', function(event){  
    // console.log(event.which > 48);
    // console.log(event.which < 57);
    // Uso wich para poder usar los valores de asciii, 48 = 0 y 57 = 9
    // Se pone rangos como this menor 0 o mayor a 9, osea otros valores asccii, no se acepta ya que tienen que ser números. Se verifica la longitud de 4
    if (event.which < 48 || event.which > 57 || this.value.length  >= 4) {
    // retorna falso porque no se ejecutará, con true se omite y aceptará letras
      return false;
    } else {
      return true;
    };
  });

  // Evento para habilitar next si se verifica el random number
  $verifyCode.on('keyup', function(event){
    console.log($(this).val().length);
    if($(this).val()=== localStorage.randomNumber){
      $next.prop('disabled', false);
    } else {
      $next.prop('disabled', true);
    };
  });

  
  // Si el codigo puesto en el input es igual al codeNumber, habilitar el boton next
  // if(){}
});