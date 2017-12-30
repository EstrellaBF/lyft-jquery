$(document).ready(function() {
  //Si se hace click
  $('body').on('click', function(){
    window.location.href = 'views/register.html';
  });
  
  //si no se hace click, igual se ejecutará la página restaurant
  setTimeout(function() {
    window.location.href = 'views/register.html';
  }, 5000);
});
