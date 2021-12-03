
  $(document).ready(function () {

    let reciept = JSON.parse(localStorage.getItem("reciept"))
    console.log(reciept)

    for (let i = 0; i < reciept.length; i++) {
      let obj = JSON.parse(reciept[i]);
      $("#items").append('<tr><td><p>Item:' + obj.name + '<P></P>'+'Cost:' + obj.cost + '</p></td></tr>')
   
    }
  
    $('.send').click(function(){
        Email.send({
            Host : "smtp.gmail.com",
            Username : "gabrieldombach@gmail.com",
            Password : 'gabe1972_google',
            To :'gdombach009@gmail.com', //JSON.parse(localStorage.getItem('userEmail')),
            From : "gabrieldombach@gmail.com",
            Subject : "Your Recipt",
            Body : $('.bought').html()
            }).then(
              message => alert(message)
            );
    });
});




  
