$(document).ready(function() {
  toggleActive();
  button_validate();
  $('#username, #password').keydown(button_validate);
  $('.color').click( function () {
    $(this).addClass('click');
  });
});

function toggleActive () {
  $('.title-level').on('click', function() {
    $(this).toggleClass('active');
    $(this).siblings('.line-left').toggleClass('active');
  });

  $('.bar-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.sidenav').toggleClass('collapse');
    $('.view-content').toggleClass('collapse');
    $('.toolbar').toggleClass('collapse');

    // validate click on bar-menu
    var mediaquery = window.matchMedia("(min-width: 768px)");
    if ($('.sidenav').hasClass('collapse') &&  mediaquery.matches) {
      $('.menu-item').hover(
        function() { $(this).addClass('active'); },
        function() { $(this).removeClass('active');
        });
    }
    else {
      $('.menu-item').unbind('mouseenter mouseleave');
    }
  });

};

function button_validate() {
  if($('#username').val().length > 0 && $('#password').val().length > 6) {
    $('.button-ln').addClass('wrapper');
    $('#validate-link').removeClass('not-active');
  }
  else {
    $('.button-ln').removeClass('wrapper');
    $('#validate-link').addClass('not-active');
  }
}