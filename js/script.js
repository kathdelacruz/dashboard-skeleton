$(document).ready(function() {
  toggleActive();
});

function toggleActive () {
  $('.menu-item').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.bar-menu').on('click', function() {
    $(this).toggleClass('active');
    $('.sidenav').toggleClass('collapse');
    $('.view-content').toggleClass('collapse');
    $('.toolbar').toggleClass('collapse');

    // validate click on bar-menu
    if ($('.sidenav').hasClass('collapse')) {
      $('.menu-item').hover(
        function() { $(this).addClass('active'); },
        function() { $(this).removeClass('active');
        });
    }
    else {
      $('.menu-item').unbind('mouseenter mouseleave');
    }
  });


}