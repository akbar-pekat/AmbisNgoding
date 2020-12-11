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
  $("body").css("overflow", "hidden");
  $(".shadow").fadeIn();
  console.log("");
});
$(".categorys .group .items").click(function() {
  categorysection = 0;
  $("body").css("overflow", "scroll");
  $(".category-section").css("bottom", "-30%");
  $("#title-container").text(this.innerText);
  $('.category .group .items').removeClass("active");
  $(".shadow").fadeOut();
  $(".container").hide();
  $(".loader-section").fadeIn();

  setTimeout(function() {
    $(".loader-section").hide();
    $(".container").fadeIn();
  }, 1500);
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
        $("body").css("overflow", "scroll");

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
  $(".container").hide();
  $(".loader-section").fadeIn();

  setTimeout(function() {
    $(".loader-section").hide();
    $(".container").fadeIn();
  }, 1500);
});

$(document).ready(function() {
  $(".category-section .content .categorys .group .items").css("animation", "none");
  $(".category-section .content .categorys .group .items").css("background", "transparent");
  $(".loader-section").fadeIn();

  setTimeout(function() {
    $(".container").fadeIn();
    $(".loader-section").hide();
  }, 1500);
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