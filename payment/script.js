let total = 0
let arr = []
let link = 1
$(document).ready(function () {

  let reciept = JSON.parse(localStorage.getItem("reciept"))
  console.log(reciept)
  /*for(let i = 0; i <= reciept.length; i++){
    if(){
 
    }
  }*/

  for (let i = 0; i < reciept.length; i++) {
    let currObj = JSON.parse(reciept[i]);
    //total = parseInt(currObj.cost)
    let price = currObj.cost
    var finalPrice = price.replace(/\$/g, '')
    var num = Number(finalPrice)
    arr.push(num)
   
    //  total = num + i 

    $("#items").append('<tr><td><p>Item:' + currObj.name + '<P></P>' + 'Cost:' + currObj.cost + '</p></td></tr>')
  }
 for (let i = 0; i < arr.length; i++) {
      total += arr[i];
      console.log(arr)
    }
  document.getElementById("total").innerHTML = "Total: $" + total
  localStorage.setItem("total", JSON.stringify(total));

   
    

  $("#showme").click(function () {
    $(".address").show()
    alert("Please enter your Address")
   
    $(this).css('background-color', 'gray');
    $(this).css('color', 'white');
    $(this).css('border', 'black');
    $(this).css('padding', '10px');
    $("#hideme").css('background-color', 'white');
    $("#hideme").css('color', 'black');
    $("#hideme").css('border', 'white');
    $("#hideme").css('padding', '5px');
  })

  $("#hideme").click(function () {
    $(".address").hide()
    $(this).css('background-color', 'gray');
    $(this).css('color', 'white');
    $(this).css('border', 'black');
    $(this).css('padding', '10px');
    $("#showme").css('background-color', 'white');
    $("#showme").css('color', 'black');
    $("#showme").css('border', 'white');
    $("#showme").css('padding', '5px');
  })

  $("#card").click(function () {

    $(this).css('background-color', 'rgba(255, 255, 255)');
    $(this).css('color', 'black');
    $("#cash").css('background-color', 'black')
    $("#cash").css('color', 'white');
  
  })
  $("#cash").click(function () {
    alert("Pay at store")
    $(this).css('background-color', 'rgba(255, 255, 255)');
    $(this).css('color', 'black');
    $("#card").css('background-color', 'black')
    $("#card").css('color', 'white');

  })
});