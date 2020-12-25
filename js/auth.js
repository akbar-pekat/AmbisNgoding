$(document).ready(function() {
  setTimeout(function() {
    $(".loading_screen").fadeOut();
  }, 2000);

  $('#toSignIn').click(function() {
    $('.signin').fadeIn();
    $('.signup').hide();
  });
  $('#toSignUp').click(function() {
    $('.signup').fadeIn();
    $('.signin').hide();
  });

  $('#actDaftar').click(function() {
    $('.loadingauth_container').fadeIn();
    setTimeout(function() {
      $('.loadingauth_container').fadeOut();
    }, 2000);
  });
  $('#actMasuk').click(function() {
    $('.loadingauth_container').fadeIn();
    setTimeout(function() {
      $('.loadingauth_container').fadeOut();
    }, 2000);
  });
});