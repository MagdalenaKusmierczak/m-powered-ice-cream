var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('demo');
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' slider__item--active', '');
  }
  x[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' slider__item--active';
}
