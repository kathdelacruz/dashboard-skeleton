$(document).ready(function() {
  toggleActive();
});

function toggleActive () {
  $('.menu-item').on('click', function() {
    $(this).toggleClass('active');
  });
}