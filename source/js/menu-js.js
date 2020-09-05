var nMain = document.querySelector('.main-nav');
var nClose = document.querySelector('.main-nav__close');
var nToggle = document.querySelector('.main-nav__toggle');

nClose.hidden = true;

nToggle.addEventListener('click', function() {
  nClose.hidden = false;
  nToggle.hidden = true;
});

nClose.addEventListener('click', function() {
  nClose.hidden = true;
  nToggle.hidden = false;
});
