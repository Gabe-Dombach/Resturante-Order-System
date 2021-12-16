let total = 0;
let arr = [];
let link = 0;
let link1 = 0;
let amount = 0;
$(document).ready(function () {
  let taxDec = localStorage.getItem('tax-Decimal', 1 + $('.tax').val() / 100);
  let reciept = JSON.parse(localStorage.getItem('reciept'));
  console.log(reciept);
  console.log(taxDec)
  /*for(let i = 0; i <= reciept.length; i++){
    if(){
 
    }
  }*/

  //table order
  for (let i = 0; i < reciept.length; i++) {
    let currObj = JSON.parse(reciept[i]);
    //total = parseInt(currObj.cost)
    let price = currObj.cost;
    var finalPrice = price.replace(/\$/g, '');
    var num = Number(finalPrice);
    arr.push(num);

    //  total = num + i
    $('#items').append(
      '<tr><td><p>' + currObj.name + ' ' + currObj.cost + '</p></td></tr>'
    );
  }
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    console.log(arr);
  }
  document.getElementById('total').innerHTML = 'CHECKOUT  $' + total;
  localStorage.setItem('total', JSON.stringify(total));

  //notification setup

  //buttons
  $('#card').click(function () {
    $('.form-popup1').show();
    $(this).css('background-color', 'rgba(255, 255, 255)');
    $(this).css('color', 'black');
    $('#cash').css('background-color', 'rgb(66, 135, 245)');
    $('#cash').css('color', 'white');
  });
  $('#cash').click(function () {
    alert('Pay at Store');
    $(this).css('background-color', 'rgba(255, 255, 255)');
    $(this).css('color', 'black');
    $('#card').css('background-color', 'rgb(66, 135, 245)');
    $('#card').css('color', 'white');
  });
  $('#pick').click(function () {
    alert('Pick up in store');
    $(this).css('background-color', 'white');
    $(this).css('color', 'black');
    $('#dev').css('background-color', '#5B84B1FF');
    $('#dev').css('color', 'white');
  });
  $('#dev').click(function () {
    $(this).css('background-color', 'white');
    $(this).css('color', 'black');
    $('#pick').css('background-color', '#5B84B1FF');
    $('#pick').css('color', 'white');
  });
  $('.btn cancel').click(function () {
    $('.form-popup1').hide();
  });
  $('#tip').click(function () {
    amount = prompt('Please provide tip amount');
    alert('Thank you very much');
    localStorage.setItem('tips', JSON.stringify(amount));
    location.reload();
  });
  let tipAmount = JSON.parse(localStorage.getItem('tips'));
  console.log(tipAmount);
  let num2 = Number(tipAmount);
  let fullPrice = num2 + total;
  document.getElementById('total').innerHTML = 'Total  $' + fullPrice;
  let tax = total * taxDec;
  var rounded = Math.round((tax + Number.EPSILON) * 100) / 100;
  console.log(rounded);

  let tax3 = rounded - total;
  let tax4 = Math.round((tax3 + Number.EPSILON) * 100) / 100;

  document.getElementById('taxAmount').innerHTML = 'Tax: ' + tax4;
  let fullAmount = fullPrice + tax4;
  let tax5 = Math.round((fullAmount + Number.EPSILON) * 100) / 100;
  document.getElementById('total1').innerHTML = 'Checkout: ' + tax5;

  localStorage.setItem('totalAmount', JSON.stringify(fullPrice));
});
