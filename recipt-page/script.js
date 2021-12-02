$(document).ready(function(){
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

if (localStorage.getItem("reciept") != null) {
let addedITems = JSON.parse(localStorage.getItem("reciept"));
let newAddedItems = [];
for (let x = 0; x < addedITems.length; x++) {
  newAddedItems.push(JSON.parse(addedITems[x]));
}}

const newItem = {
  name: itemName,total,quantity
};
arr1.push(JSON.stringify(newItem));
localStorage.setItem("reciept", JSON.stringify(arr1));