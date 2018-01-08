$(document).ready(function () {
  var $firstName = $('#first-name');
  var $lastName = $('#last-name');
  var $mailInput = $('#mail-input');
  var $inputAccount = $('.input-account');

  // Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjfb8eBnSQuL_ZLz1lldnhrfRmhh3P1AE",
    authDomain: "primer-proyecto-c38c2.firebaseapp.com",
    databaseURL: "https://primer-proyecto-c38c2.firebaseio.com",
    projectId: "primer-proyecto-c38c2",
    storageBucket: "primer-proyecto-c38c2.appspot.com",
    messagingSenderId: "352532098931"
  };
  firebase.initializeApp(config);
  // LOGIN
    var provider = new firebase.auth.GoogleAuthProvider();

  // signInWithPopup
      $('#sesion').click(function(){
      // Pegando la primera línea del punto 5    
      firebase.auth()
      .signInWithPopup(provider)
      .then(function(result) {
          console.log(result.user);
          guardaDatos(result.user);
          $('#sesion').hide();
          //añadiendo mi imagen de google
          $('#raiz').append("<img width='100px' src=' " + result.user.photoURL + " ' />", '<p> resultuser.displayName<p/>');
      });   
  });
  // Escribiendo en firebase
  function guardaDatos(user){
    // creando var para almacenar del usuario su nombre mail y foto
    var nuevoUsuario = {
      // cuando se inicia sesion, es un unico numer
      uid: user.uid,
      nombre: user.displayName,
      correo: user.email,
      foto: user.photoURL
    };
    // guardando en firebase, recuerda que set grabaría en toda la rama, osea se sustituiria. Se concatena para que se almacene en la misma user id
    firebase.database().ref('nueva BD/' + user.id).set(nuevoUsuario);

    
  }
  // End Firebase
  
  // Evento para guardar el first name
  $firstName.on('input', function (e) {
    console.log($(this).val().length);
    localStorage.fistName = $(this).val();
  });

  // Evento para guardar el last name
  $lastName.on('input', function (e) {
    console.log($(this).val());
    localStorage.lastName = $(this).val();
  });

  // Evento para guardar el email y verificar que sea email
  $mailInput.on('input', function () {
    localStorage.mail = $(this).val();
    var patternEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    console.log(patternEmail.test($(this).val()));
  });


  // Copio función pero en este caso que se verifyque solo letras
  // Al ponerlo funciona perfectamente
  // Se verifica un máximo de hasta 30 dígitos.
  $inputAccount.on('keypress', function (event) {
    if (event.which < 65 || event.which > 122) {
      // retorna falso porque no se ejecutará, con true se omite y aceptará letras
      return false;
    } else {
      return true;
    };
  });

  // Función para verificar el contenido
  // if ($firstName.val().length >= 0) {
  //   console.log('no hay nada')
  // } else {
  //   console.log('es diferente de vacio')
  // };


});