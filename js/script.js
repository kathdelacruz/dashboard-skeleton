$(document).ready(function() {
  toggleActive();
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


}