$(document).ready(function() {
  var $flagIcon = $('.flag-icon');
  var rutaLocal = '../assets/images/';
  var $input = $('.form-control');
  var $next = $('.btn-primary');
  var $messageSMS = $('#message-sms');
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
    } else {
      $next.prop('disabled', true);
    };
  });


});