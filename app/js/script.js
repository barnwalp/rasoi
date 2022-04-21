console.log('test');
let hamburger_menu = document.querySelector('.hamburger-menu');
let overlay = document.querySelector('.overlay-mobile-menu');

hamburger_menu.addEventListener('click', function(){
  if (hamburger_menu.classList.contains('open')) {
    hamburger_menu.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else {
    hamburger_menu.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
  }
});