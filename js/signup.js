$(document).ready(function() {
  var $flagIcon = $('.flag-icon');
  var rutaLocal = '../assets/images/';
  var $input = $('.form-control');
  var $next = $('#button-next');
  var $messageSMS = $('#message-sms');
  var $buttonSendSms = $('#button-send-sms');
  var $codeSms = $('#code-sms');
  var $buttonOkCode = $('#button-ok-code');
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
    if($(this).val().length >= 9 &&  $(this).val().length <=10){
      $next.prop('disabled', false);
      $messageSMS.text('We\'ll send a text to verify your phone');
      $buttonSendSms.show();
    } else {
      $next.prop('disabled', true);
    };
  });

  // función para sacar el número aleatorio
  function ramdonNumber(){
    var num = '0123456789';
    var arr="";
    var code;
    for(var i = 0; i < 4; i++){
      var nuevo = Math.floor(Math.random() * num.length); // siendo num "12" jala 0 y 1(length) y siendo un total de 12 veces 
      arr = arr + nuevo;
      console.log(arr);  //arroja cantidades de numero hasta el valor de num 1111001110
      $codeSms.text("LAB - " + arr);
    } 
  };
  
  // Evento para que cuando se envie el mensaje, se muestre el código en el modal
  $buttonSendSms.on('click', ramdonNumber);

  //Evento para guardar el dato en el local storage
  $buttonOkCode.on('click', function(e){
  console.log($codeSms.text());
    e.preventDefault();
    localStorage.codeNumber = $codeSms.text();
    console.log(localStorage);
    window.location.href = 'index.html';
  });

  console.log(localStorage.test1 ="pollo");
  console.log(localStorage.test2 ="peluche");

});