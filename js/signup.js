$(document).ready(function() {
  var $flagIcon = $('.flag-icon');
  var indexCode;
  var rutaLocal = '../assets/images/';
  var arrImages = [
    {url: 'peru.png'},
    {url: 'chile.png'},
    {url: 'mexico.png'},
    {url: 'brazil.png'}
  ];

  //Codigo postal, se pondrá manual pero jalará de forma dinámica
  var postalCode = [
    {code: '+51'},
    {code: '+56'},
    {code: '+52'},
    {code: '+55'}
  ];
  

  console.log(arrImages);
  console.log(arrImages[0].url); //peru.png
  var cosha = arrImages[0].url;
  console.log(postalCode[0].code); //+51
  // console.log($flagIcon.eq(0).attr({'src': rutaLocal + arrImages[0].url, 'alt':arrImages[0].url}));
  // console.log(arrImages.length);
  //Creando función en caso se quiera añadir más sedes y sea más dinámico
  // indexCode = postalCode[i].code;
  // for(var i = 0; i < arrImages.length; i++){
  //   // $flagIcon.eq(i).attr({src:rutaLocal + arrImages[i].url, alt:arrImages[i].url});
  //   $flagIcon.eq(i).attr('src', rutaLocal + arrImages[i].url);
  // };
  $.each(arrImages, function(index, val){
    console.log(index);//3
    console.log(val);//{url: "brazil.png"}
    console.log(val.url);//brazil.png
  });

  $flagIcon.on('click', function(e){
    console.log(e.target);        //<img src="../assets/images/peru.png" class="img-responsive" alt="Responsive image">
    console.log(e.currentTarget); //<a href="#" class="flag-icon" id="peru"><img src="../assets/images/peru.png" class="img-responsive" alt="Responsive image"></a>
    console.log($('#peru').attr('src'));
  });
});