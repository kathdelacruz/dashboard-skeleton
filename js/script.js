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
  });
}