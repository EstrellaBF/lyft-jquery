$(document).ready(function () {
  var $phoneCode = $('#phone-code')
  var $next = $('#button-next');
  var $verifyCode = $('#verify-code');
  var $buttonResend = $('#button-resend');
  var $codeSms = $('#code-sms');
  console.log($next);

  // desabilitando boton next *AVERIGUAR SI TRAE COMPLICACIONES TENER EL MISMO ID EN ARCHIVOS DIFERENTES SIN ENLAZARSE*
  $next.prop('disabled', true);

  // Añade el codigo del país seleccionado y el número ingresado en la página signup
  $phoneCode.text('Enter the code send to: ' + localStorage.codeNumber + ' ' + localStorage.phoneNumber);



  // cambio keypress por keyup no detecta caracteres especiales pero si el acsii 
  $verifyCode.on('keypress', function (event) {
    // Uso wich para poder usar los valores de asciii, 48 = 0 y 57 = 9
    // Se pone rangos como this menor 0 o mayor a 9, osea otros valores asccii, no se acepta ya que tienen que ser números. Se verifica la longitud de 4
    if (event.which < 48 || event.which > 57 || this.value.length >= 4) {
      // retorna falso porque no se ejecutará, con true se omite y aceptará letras
      return false;
    } else {
      return true;
    };
  });

  // Evento para habilitar next si se verifica el random number
  $verifyCode.on('keyup', function (event) {
    console.log($(this).val().length);
    if ($(this).val() === localStorage.randomNumber) {
      $next.prop('disabled', false).css({ "background-color": "#ea0b8c", "color": "#fff" }).prop('disabled', false);
    } else {
      $next.prop('disabled', true).css({ "background-color": "#dfdfdf", "color": "#aeaeae" });
    };
  });

  // función para sacar el número aleatorio y se reemplazará cada vez que se ejecute
  function ramdonNumber() {
    var num = '0123456789';
    var arr = "";
    var code;
    for (var i = 0; i < 4; i++) {
      var nuevo = Math.floor(Math.random() * num.length); // siendo num "12" jala 0 y 1(length) y siendo un total de 12 veces 
      arr = arr + nuevo;
      console.log(arr);  //arroja cantidades de numero hasta el valor de num 1111001110
      $codeSms.text(arr);
      localStorage.randomNumber = arr;
    }
  };

  // Evento para que cuando se envie el mensaje, se muestre el código en el modal
  $buttonResend.on('click', ramdonNumber);

  //Evento para pasar a account
  $next.on('click', function () {
    window.location.href = 'account.html'
  });
});