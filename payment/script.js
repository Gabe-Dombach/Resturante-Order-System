let total = 0
let arr = []
let link = 0
let  link1 = 0
let amount = 0
$(document).ready(function () {

  let reciept = JSON.parse(localStorage.getItem("reciept"))
  console.log(reciept)
  /*for(let i = 0; i <= reciept.length; i++){
    if(){
 
    }
  }*/

//table order
  for (let i = 0; i < reciept.length; i++) {
    let currObj = JSON.parse(reciept[i]);
    //total = parseInt(currObj.cost)
    let price = currObj.cost
    var finalPrice = price.replace(/\$/g, '')
    var num = Number(finalPrice)
    arr.push(num)
   
    //  total = num + i 
    $("#items").append('<tr><td><p>' + currObj.name +' '+ currObj.cost +  '</p></td></tr>')
  }
 for (let i = 0; i < arr.length; i++) {
      total += arr[i];
      console.log(arr)
    }
  document.getElementById("total").innerHTML = "CHECKOUT  $" + total
  localStorage.setItem("total", JSON.stringify(total));

  //notification setup
 

//buttons 
  $("#card").click(function () {
  
    $(this).css('background-color', 'rgba(255, 255, 255)');
    $(this).css('color', 'black');
    $("#cash").css('background-color', 'black')
    $("#cash").css('color', 'white');
  
  })
  $("#cash").click(function () {
    
    $(this).css('background-color', 'rgba(255, 255, 255)');
    $(this).css('color', 'black');
    $("#card").css('background-color', 'black')
    $("#card").css('color', 'white');

  })
  $("#pick").click(function () {
    alert('Pick up in store')
    $(this).css('background-color', 'white');
    $(this).css('color', 'red');
    $("#dev").css('background-color', 'black')
    $("#dev").css('color', 'white');
  })
  $("#dev").click(function () {
    alert('Pick up in store')
    $(this).css('background-color', 'white');
    $(this).css('color', 'red');
    $("#pick").css('background-color', 'black')
    $("#pick").css('color', 'white');
  })
  $("#tip").click(function (){
     amount = prompt("Please provide tip amount");
    alert ("Thank you very much");
    localStorage.setItem("tips",JSON.stringify(amount))
    location.reload();
  
  })
 let tipAmount = JSON.parse(localStorage.getItem("tips"))
  console.log(tipAmount)
  let num2 = Number(tipAmount)
  let fullPrice = num2 + total
  document.getElementById("total").innerHTML = "CHECKOUT  $" + fullPrice
  localStorage.setItem("totalAmount", JSON.stringify(fullPrice))
});
