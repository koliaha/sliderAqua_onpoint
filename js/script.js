document.addEventListener("DOMContentLoaded", function () {
  let sliderWrapper = document.querySelector('.slider__wrapper')
  let rng = document.getElementById('r1');
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
  let dot = document.querySelectorAll('.dot');
  dot.forEach((el)=>{
    el.className = "dot"
    el.addEventListener('click', (elem)=>{
      elem.className = "dot active"
    })
  })


  

 
  window.onscroll = function scrol() {
    let imgnext = document.getElementById('img_next');
    let textarrow = document.getElementById('textarrow');
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
    
    if (window.pageYOffset < 302) {
      dot[0].className = "dot active";
    } else dot[0].className = "dot";
    if (window.pageYOffset >= 302 & window.pageYOffset < 1100) {
      dot[1].className = "dot active";
    } else dot[1].className = "dot";
    if (window.pageYOffset >= 1100) {
      dot[2].className = "dot active";
    } else dot[2].className = "dot";
  };
  if (dot[1].className == "dot active") {
    document.documentElement.scrollTop = 700;
  }
 
});