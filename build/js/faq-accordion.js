$(document).ready(function () {
  $('.faq-list__panel').click(function () {
    $(this).toggleClass('panel-open').next().slideToggle();
    $('.faq-list__panel').not(this).removeClass('panel-open').next().slideUp();
  });
});