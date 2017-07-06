$(function () {
  $(".adduser").click(function() {
    $(".currentusers").css("display", "none");
    $(".availableusers").css("display", "block");
  });

  $(".done").click(function() {
    $(".currentusers").css("display", "block");
    $(".availableusers").css("display", "none");
  });
});