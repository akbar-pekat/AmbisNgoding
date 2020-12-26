$(document).ready(function() {
  $(".bottom_bars").click(function() {
    $(".bottom_container").css("bottom", "15px");
    $(".bottom_bars").fadeOut();
  });

  setTimeout(function() {
    $(".loading_screen").fadeOut();
  }, 2000);

  $('.bottom_container .content .items').click(function() {
    $(this).siblings('.items').removeClass('active');
    $(this).addClass('active');
  });

  $('#nav_akun').click(function() {
    window.location.href = "auth.html"
  });
  $('#nav_beranda').click(function() {
    window.location.href = "index.html"
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
});