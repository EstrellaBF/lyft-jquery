$(document).ready(function() {
  var $flagIcon = $('.flag-icon');
  var rutaLocal = '../assets/images/';
  var $input = $('.form-control');
  var $next = $('#button-next');
  var $messageSMS = $('#message-sms');
  var $buttonSendSms = $('#button-send-sms');
  var countries = [
    {url: 'peru.png',
    code:'+51'},
    {url: 'chile.png',
    code:'+56'},
    {url: 'mexico.png',
    code:'+52'},
    {url: 'brazil.png',
    code:'+55'}
  ];

  //Desabilitando boton next y el input
  $next.prop('disabled', true);
  $input.prop('disabled', true);
  $buttonSendSms.hide();

  //Creando función en caso se quiera añadir más banderas o paises y sea más dinámico
  //Sólo se tendría que añadir el nombre de la imagen y su código en el objeto
  function flags(){
    $.each(countries, function(index, val){
      $flagIcon.eq(index).attr('src', rutaLocal + val.url);
    });
  };
  flags();

  //función para que jale los codigos y los ponga en el input
  function getCallingCode(){  
    for(var i = 0; i < countries.length; i ++){
      // debugger
      if($(this).attr('src') === rutaLocal + countries[i].url){
        $('#calling-code').text(countries[i].code);
        $input.prop('disabled', false);
      };
    };
  }
  // Ejecutando la función en el evento click
  $flagIcon.on('click', getCallingCode); 

  // Evento para poder confirmar la cantidad de números que se ingresa
  $input.on('input', function(){
    // console.log($(this).val()); //los numeros que se van poniendo
    // console.log($(this).val().length); //la cantidad de digitos
    // Se limita a 9 dígitos para perú y 10 dígitos para los otros paises
    if($(this).val().length >= 9 &&  $(this).val().length <=10){
      $next.prop('disabled', false);
      $messageSMS.text('We\'ll send a text to verify your phone');
      $buttonSendSms.show();
    } else {
      $next.prop('disabled', true);
    };
  });

  // función para sacar el número aleatorio
  var num = '0123456789';
  var count = 0;
  var arr="";
  // console.log(Math.floor(Math.random() * num.length)); //retorna numeros entre el 1 al 10
  // IMPORTANTE : El valor de num jalará un total de n iteraciones, y al poner length, los números aleatorios tendrán length digitos
  // EJEMPLO: num="10" al tener length = 2, los números aleatorios serán 0 y 1 (al poner en el for i< num, será 0 y 1), y se verán reflejados en consola 10 veces.
  for(var i = 0; i < 4; i++){
    //debugger
    // console.log(Math.floor(Math.random() * num)); // numeros aleatorios uno por uno incluyendo el 9
    var nuevo = Math.floor(Math.random() * num.length); // siendo num "12" jala 0 y 1(length) y siendo un total de 12 veces 
    // console.log(bla);
    // console.log(nuevo);
    arr = arr + nuevo;
    console.log(arr);  //arroja cantidades de numero hasta el valor de num 1111001110
  }
  
  

});