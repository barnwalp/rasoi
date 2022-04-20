console.log('test');
let hamburger_menu = document.querySelector('.hamburger-menu');

hamburger_menu.addEventListener('click', function(){
  if (hamburger_menu.classList.contains('open')) {
    hamburger_menu.classList.remove('open');
  } else {
    hamburger_menu.classList.add('open');
  }
});