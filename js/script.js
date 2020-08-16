document.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 3;
  let sliderWrapper = document.querySelector('.slider__wrapper')
  var rng = document.getElementById('r1');
  rng.addEventListener('change', () => {
    if (rng.value <= 100 & rng.value >= 75) {
      rng.value = 100;
      sliderWrapper.style.transform = 'translateX(-200%)'
    } else {
      if (rng.value <= 25 & rng.value >= 1) {
        rng.value = 1;
        sliderWrapper.style.transform = 'translateX(0%)'
      } else {
        rng.value = 50;
        sliderWrapper.style.transform = 'translateX(-100%)'
      }
    }
  });
  var dot = document.querySelectorAll('.dot');
  dot[0].addEventListener('click', () => {
    scrollTo(0, 0);
  });
  dot[1].addEventListener('click', () => {
    scrollTo(0, 700);
  });
  dot[2].addEventListener('click', () => {
    scrollTo(0, 2304);
  });
  var scrollnext = document.querySelector('.textarrow');
  scrollnext.addEventListener('click', () => {
    scrollTo(0, 700);
  })


  window.onscroll = function scrol() {
    var imgnext = document.getElementById('img_next');
    var textarrow = document.getElementById('textarrow');
    if (window.pageYOffset > 3) {
      imgnext.className = "img_next active";
    } else {
      imgnext.className = "img_next";
    }
    if (window.pageYOffset > 70) {
      textarrow.className = "textarrow active";
    } else {
      textarrow.className = "textarrow";
    }
    if (window.pageYOffset < 202) {
      dot[0].className = "dot active";
    } else dot[0].className = "dot";
    if (window.pageYOffset >= 202 & window.pageYOffset < 1200) {
      dot[1].className = "dot active";
    } else dot[1].className = "dot";
    if (window.pageYOffset >= 1200) {
      dot[2].className = "dot active";
    } else dot[2].className = "dot";
  };

});