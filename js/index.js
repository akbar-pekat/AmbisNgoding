$(".bottom_bars").click(function() {
  $(".bottom_container").css("bottom", "15px");
  $(".bottom_bars").fadeOut();
});

$("#tnm_more").click(function() {
  $(".modal_container").fadeIn();
});
$("#understand").click(function() {
  $(".modal_container").fadeOut();
});

$(document).ready(function() {
  setTimeout(function() {
    $(".loading_screen").fadeOut();
  }, 3500);

  $('.bottom_container .content .items').click(function() {
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
      $(".bottom_container").css("bottom", "-25%");
      $(".bottom_bars").fadeIn();
    } else {
      /* down swipe */
      $(".bottom_container").css("bottom", "15px");
      $(".bottom_bars").fadeOut();
    }
  }
  xDown = null;
  yDown = null;
}

var macy = Macy({
  container: '#midnight-pro_container',
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

var te_cb100 = $("#te_cb100");
$("#cb100").scroll(function() {
  if ($(this).scrollLeft() + $(this).innerWidth() >= 400) {
    te_cb100.fadeOut();
  } else {
    te_cb100.fadeIn();
  }
});
var te_tiara = $("#te_tiara");
var tce_tiara = $("#tce_tiara");
$("#mbtiara").scroll(function() {
  if ($(this).scrollLeft() + $(this).innerWidth() >= 400) {
    te_tiara.fadeOut();
    tce_tiara.fadeOut();
  } else {
    te_tiara.fadeIn();
    tce_tiara.fadeIn();
  }
});
//$(this)[0].scrollWidth/3.7

tippy('#history', {
  content: "History",
});
tippy('#topup', {
  content: "Top-Up",
});