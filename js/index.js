var setsb;
$("#sidebar").click(function() {
  setsb = 1;
  $(".sidebar").css("right", "0px");
  $(".shape").fadeIn();
});
$(".shape").click(function() {
  setsb = 0;
  $(".sidebar").css("right", "-13rem");
  $(".shape").fadeOut();
});

var setro;
$("#recipeone").click(function() {
  setro = 1;
  $(".openrecipe").css("bottom", "0px");
  $("#sidebar").toggle();
  $("#closerecipe").toggle();
  $("#searchicon").hide();
});
$("#closerecipe").click(function() {
  setro = 0;
  $(".openrecipe").css("bottom", "-90%");
  $("#sidebar").toggle();
  $("#closerecipe").toggle();
  $("#searchicon").show();
});

var setosb;
$("#searchicon").click(function() {
  setosb = 1;
  $(".pagesearch").css("bottom", "0px");
});
$("#closesearchbox").click(function() {
  setosb = 0;
  $(".pagesearch").css("bottom", "-100%");
  $("#searchinput").val("");
});

var container = document.querySelector("html");
container.addEventListener("touchstart", startTouch, false);
container.addEventListener("touchmove", moveTouch, false);

var initialX = null;
var initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }

  if (initialY === null) {
    return;
  }

  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;

  var diffX = initialX - currentX;
  var diffY = initialY - currentY;

  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
      //left
    } else {
      if (setsb == 1) {
        setsb = 0;
        $(".sidebar").css("right", "-13rem");
        $(".shape").fadeOut();
      } else {
        //right
      }
    }
  } else {
    if (diffY > 0) {
      //up
    } else {
      if (setro == 1) {
        setro = 0;
        $(".openrecipe").css("bottom", "-90%");
        $("#sidebar").toggle();
        $("#closerecipe").toggle();
        $("#searchicon").show();
      } else if (setosb == 1) {
        setosb = 0;
        $(".pagesearch").css("bottom", "-100%");
        $("#searchinput").val("");
      } else {
        //down
      }
    }
  }
  initialX = null;
  initialY = null;
  e.preventDefault();
}

/*const ptr = PullToRefresh.init({
  mainElement: 'body',
  onRefresh() {
    window.location.reload();
  }
});*/

var items = ["Nasi Goreng", "Tempe Bacem", "Sup Kentang Wortel", "Nasi Kucing", "Nasi Krawu"];

autocomplete(document.getElementById("searchinput"), items);