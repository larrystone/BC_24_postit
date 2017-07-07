$(function () {
  $('.form').find('input, textarea').on('blur focus', function (e) {

    var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'blur') {
      if ($this.val() === '') {
        label.removeClass('active highlight');
      } else {
        label.removeClass('highlight');
      }
    } else if (e.type === 'focus') {
      label.addClass('active highlight');
    }

  });

  $('.tab').on('click', function (e) {

    e.preventDefault();

    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    var target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);
  });

  $('#reveal').on('click', function (e) {
    e.preventDefault();
    
    if ($(this).siblings('input').attr('type') === 'password') {
      $(this).siblings('input').attr('type', 'text');
      $(this).text('hide');
    } else {
      $(this).siblings('input').attr('type', 'password');
      $(this).text('show');
    }
  });

  //remove this later
  $("#submit").on('click', function(e) {
    e.preventDefault();
    window.location.href="dashboard.html";
  });
});