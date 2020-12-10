var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
  },
})

var categorysection;
$("#itemsmore").click(function() {
  categorysection = 1;
  $(".category-section").css("bottom", "0px");
  $(".shadow").fadeIn();
});
$(".categorys .group .items").click(function() {
  categorysection = 0;
  $(".category-section").css("bottom", "-30%");
  $("#title-container").text(this.innerText);
  $('.category .group .items').removeClass("active");
  $(".shadow").fadeOut();
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
  xDown = evt.touches[0].clientX;
  yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
  if (! xDown || ! yDown) {
    return;
  }
  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      /* left swipe */
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
      if (categorysection == 1) {
        categorysection = 0;
        $(".category-section").css("bottom", "-30%");
        $(".shadow").fadeOut();
      }
    }
  }
  xDown = null;
  yDown = null;
}

$('.category .group .items').click(function() {
  $('.category .group .items').removeClass("active");
  $("#title-container").text(this.innerText);
  $(this).addClass("active");
});

$(document).ready(function() {
  $(".category-section .content .categorys .group .items").css("animation", "none");
  $(".category-section .content .categorys .group .items").css("background", "transparent");
});

window.onscroll = function() {
  myFunction()};

var category = document.getElementById("category");
var sticky = category.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    category.classList.add("sticky");
  } else {
    category.classList.remove("sticky");
  }
}