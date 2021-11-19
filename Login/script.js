$(document).ready(function () {
  $(".loginBut").click(function () {
    console.log("working");
    if (
      localStorage.getItem($(".emailLogin").val()) == null &&
      $(".emailLogin").val() != "admin"
    ) {
      window.alert(
        "Account not found please check your credentials or register a new account"
      );
    } else if ($(".emailLogin").val() == "admin") {
      if ($(".passwordLogin").val() == "password") {
        window.location.replace("../manager-page/manager.html");
      } else window.alert("incorect password");
    } else {
      let currentUser = JSON.parse(localStorage.getItem($(".emailLogin").val()));
      localStorage.setItem('userEmail',JSON.stringify($('.emailLogin').val()));
      if ($(".passwordLogin").val() == currentUser.password) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.replace("../menue/menue.html");
      } else {
        window.alert("incorect password");
      }
    }
  });
  $("*").keyup(function (event) {
    if (event.keyCode === 13) {
      $(".loginBut").click();
    }
  });
});
