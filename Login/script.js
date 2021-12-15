$(document).ready(function () {
  $('.loginBut').click(function () {
    console.log('working'); //run when login button is clicked
    if (
      localStorage.getItem($('.emailLogin').val()) == null &&
      $('.emailLogin').val() != 'admin' //check to see if username exist
    ) {
      window.alert(
        'Account not found please check your credentials or register a new account'
      );
    } else if ($('.emailLogin').val() == 'admin') {
      if ($('.passwordLogin').val() == 'password') {
        //Check to see if credentials are the managers
        window.location.replace('../manager-page/manager.html');
      } else window.alert('incorect password');
    } else {
      let currentUser = JSON.parse(
        localStorage.getItem($('.emailLogin').val())
      ); //pull up current user and set current user in localStorage
      localStorage.setItem('userEmail', JSON.stringify($('.emailLogin').val()));
      if ($('.passwordLogin').val() == currentUser.password) {
        //check if password is correct
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.replace('../menue/menue.html'); //navigate to main menue page
      } else {
        window.alert('incorect password', 'Please enter only valid passwords');
      }
    }
  });
  $('*').keyup(function (event) {
    //Event listner to trigger login function when enter is pressed
    if (event.keyCode === 13) {
      $('.loginBut').click();
    }
  });
});
