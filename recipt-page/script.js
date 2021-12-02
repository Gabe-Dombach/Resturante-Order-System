$(document).ready(function () {

  let reciept = JSON.parse(localStorage.getItem("reciept"))
  console.log(reciept)

  for (let i = 0; i < reciept.length; i++) {
    let currObj = JSON.parse(reciept[i]);

    $("#items").append('<tr><td><p>Item:' + currObj.name + '<P></P>'+'Cost:' + currObj.cost + '</p></td></tr>')
    console.log(total)
  }

  
  $('send').click(function(){
      Email.send({
          Host : "smtp.elasticemail.com",
          Username : "gabrieldombach@gmail.com",
          Password : "681A47444C7D4CAD2E161B2B9B6F455E7B35",
          To : JSON.parse(localStorage.getItem('userEmail')),
          From : "gabrieldombach@gmail.com",
          Subject : "Your Recipt",
          Body : $('.bought').html()
          }).then(
            message => alert(message)
          ); 
  })
}) 

