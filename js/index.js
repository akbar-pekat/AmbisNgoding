$(".ios_bars").click(function() {
  $(".bottombar").css("bottom", "15px");
  $(".ios_bars").fadeOut();
});

$("#tnm_more").click(function() {
  $(".modal_overflow").fadeIn();
});
$("#understand").click(function() {
  $(".modal_overflow").fadeOut();
});

$(document).ready(function() {
  setTimeout(function() {
    $(".loadingscreen").fadeOut();
  }, 2000);

  $('.bottombar .content .items').click(function() {
    $(this).siblings('.items').removeClass('active');
    $(this).addClass('active');
  });
});

document.addEventListener('touchstart',
  handleTouchStart,
  false);
document.addEventListener('touchmove',
  handleTouchMove,
  false);
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
      $(".bottombar").css("bottom", "-25%");
      $(".ios_bars").fadeIn();
    } else {
      /* down swipe */
      $(".bottombar").css("bottom", "15px");
      $(".ios_bars").fadeOut();
    }
  }
  xDown = null;
  yDown = null;
}

var macy = Macy({
  container: '#groupproducts',
  trueOrder: true,
  waitForImages: true,
  margin: {
    x: 0,
    y: 15
  },
  columns: 2,
  mobileFirst: true
});

function imgError(image) {
  image.onerror = "";
  image.src = "gtt.png";
  return true;
}

var promobox = $("#promobox");
$("#promocon").scroll(function() {
  if ($(this).scrollLeft() + $(this).innerWidth() >= 400) {
    promobox.fadeOut();
  } else {
    promobox.fadeIn();
  }
});
//$(this)[0].scrollWidth/3.7

tippy('#history', {
  content: "History",
});
tippy('#topup', {
  content: "Top-Up",
});