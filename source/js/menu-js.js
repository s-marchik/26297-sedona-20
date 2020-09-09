var nMain = document.querySelector('.main-nav');
var nClose = document.querySelector('.main-nav__close');
var nToggle = document.querySelector('.main-nav__toggle');

nToggle.classList.add('main-nav--active');

nToggle.addEventListener('click', function() {
  nClose.classList.add('main-nav--active');
  nToggle.classList.remove('main-nav--active');
});

nClose.addEventListener('click', function() {
  nClose.classList.remove('main-nav--active');
  nToggle.classList.add('main-nav--active');
});
