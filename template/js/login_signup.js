$(function () {
  $("#password2").css({"display": "none"});
  
  $(".nav").click(function () {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
  });

  $(".nav.login").click(function () {
    $("#password2").css({ "display": "none" });
    $("#glogin").css({ "display": "block" });
  });
  $(".nav.signup").click(function () {
    $("#password2").css({ "display": "block" });
    $("#glogin").css({ "display": "none" });
  });
  
  $("#submit").click(function () {
    $(".nav.signup").hasClass("selected") ? signUp() : login();
  });
});

let login = () => {
  alert("Login success in prank mode");
}

let signUp = () => {
  if ($("#password").val().length < 5)
    alert("invalid password.\nPassword must be at least 6 characters in length");  
  else if ($("#password").val() !== $("#password2").val())
    alert("passwords do not match")
  else
    alert("Signup success in prank mode");
}