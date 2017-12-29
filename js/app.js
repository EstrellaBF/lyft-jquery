$(document).ready(function() {
    //Si se hace click
    $('body').on('click', function(){
      window.location.href = 'views/login.html';
    });
  
    //si no se hace click, igual se ejecutará la página restaurant
    setTimeout(function() {
       window.location.href = 'views/login.html';
    }, 5000);
    /*
    
    */
  });
