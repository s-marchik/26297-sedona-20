var nMain = document.querySelector('.main-nav');
var nClose = document.querySelector('.main-nav__close');
var nToggle = document.querySelector('.main-nav__toggle');

nToggle.addEventListener('click', function() {
  nClose.classList.add('main-nav--active');
  nClose.classList.remove('main-nav--inactive');
  nToggle.classList.add('main-nav--inactive');
  nToggle.classList.remove('main-nav--active');
});

nClose.addEventListener('click', function() {
  nClose.classList.remove('main-nav--active');
  nClose.classList.add('main-nav--inactive');
  nToggle.classList.remove('main-nav--inactive');
  nToggle.classList.add('main-nav--active');
});
