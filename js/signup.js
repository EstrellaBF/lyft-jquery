$(document).ready(function() {
  var $flagIcon = $('.flag-icon');
  var indexCode;
  var rutaLocal = '../assets/images/';
  var arrImages = [
    {url: 'peru.png',
    code:'+51'},
    {url: 'chile.png',
    code:'+56'},
    {url: 'mexico.png',
    code:'+52'},
    {url: 'brazil.png',
    code:'+55'}
  ];
  
  // console.log(arrImages[0]);
  // console.log(arrImages[0].url); //peru.png
  // console.log(arrImages[0].code); //+51

  // console.log(arrImages);
  // console.log(arrImages[0].url); //peru.png
  // var cosha = arrImages[0].url;
  // console.log($flagIcon.eq(0).attr({'src': rutaLocal + arrImages[0].url, 'alt':arrImages[0].url}));
  // console.log(arrImages.length);

  //Creando función en caso se quiera añadir más banderas o paises y sea más dinámico, solo se tendría que añadir el id con el nombre del país a la sede y añadir al array postalcode
  function flags(){
    $.each(arrImages, function(index, val){
      $flagIcon.eq(index).attr('src', rutaLocal + val.url);
    });
  };
  flags();

  //función para que jale los codigos y los ponga en el input
  $flagIcon.on('click', function(e){  
    console.log(e.target);
    console.log(e.currentTarget);
    console.log($(this).attr('src')); //../assets/images/peru.png
    console.log($(this).attr('src')); //../assets/images/peru.png
    console.log($('#postal-code-number'))
    for(var i = 0; i < arrImages.length; i ++){
      // debugger
      if($(this).attr('src') === rutaLocal + arrImages[i].url){
        $('#postal-code-number').text(arrImages[i].code);
        
      };
    };
    
  });

      
      // console.log(val); //{url: "peru.png", code: "+51"}
      // console.log(arrImages[index].url);//peru.png
      // console.log($(this).attr('src'));
      // console.log($('#peru').attr('src'));//../assets/images/peru.png
      // console.log($flagIcon);
      // if($(this).attr('src') === rutaLocal + arrImages[index].url){
      //   console.log(true);
      // } else {
      //   console.log(false);
      // };
      
  
});