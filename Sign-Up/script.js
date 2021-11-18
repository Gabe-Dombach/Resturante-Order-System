$(document).ready(function () {
  function isEmail(address) {
    address = address.split("");
    if (
      address.indexOf("@") != -1 &&
      address.indexOf("@") != 0 &&
      address.indexOf(".") > address.indexOf("@")
    ) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }

  $(".signupBut").click(function () {
    if (localStorage.getItem($(".email").val()) != null)
      window.alert(
        "Sorry, an Account with that email already exists, please select andother"
      );
    else if (!isEmail($(".emailSignup").val()))
      window.alert("please enter a valid email adress");
    else if (
      isEmail($(".emailSignup").val()) &&
      $(".passwordSignup").val() != null &&
      $(".passwordSignup").val() == $(".passwordConfirm").val()
    ) {
      const newUser = {
        password: $(".passwordSignup").val(),
        username: $("emailSignup").val(),
      };
      localStorage.setItem($(".emailSignup").val(), JSON.stringify(newUser));
      window.location.replace("../Login/login.html");
    } else {
      window.alert("invalid password");
    }
  });

  $("*").keyup(function (event) {
    if (event.keyCode === 13) {
      $(".signupBut").click();
    }
  });
});
