let list = []

$(document).ready(function(){
  list = JSON.parse(localStorage.getItem("menue"))
  for(let i = 0; i < list.length; i++)
  {
    list[i] = JSON.parse(list[i])
    let foodId = list[i].idName
    foodId = foodId.join("")
    let food = list[i].name
    let imageData = list[i].image
    let price = list[i].price
    $("#food").append(
      "<tr><td id=" +
        foodId + 
        "0>" +
        "<img src=" +
        imageData +
        "></td><td><div>" +
        food +
        "</div></td><td><div id=" +
        foodId +
        "1>" +
        price +
        '</div></td><td><button onclick="addItem(this)" id=' +
        foodId +
        ">Add</button></td></tr>"
    );
  }
});

function addItem(a) {
  let item = a.id;
  let value = "#" + item + 1;
  let image = "#" + item + 0;
  let imageContent = $(image).html();
  let valueContent = $(value).html();
  let checker = $("#1" + item).html();
  var count = $(a).data("count") || 0;
  if (count < 1) {
    $(a).data("count", ++count);
    $("#items").append(
      "<tr id=1" +
        item +
        "><td>" +
        imageContent +
        "</td><td><div>" +
        item +
        "</div></td><td><div>" +
        valueContent +
        "</div></td><td><div>" +
        count +
        '</div></td><td><button onclick="removeItem(this)" id=but' +
        item +
        ">Remove</button></td></tr>"
    );
  } 
  else if(count > 1 && checker == undefined){
    $("#1" + item).remove();
    $(a).data("count", 1);
    let count = 1
    valueContent = valueContent.split("");
    valueContent.shift();
    valueContent = valueContent.join("")
    valueContent = Number(valueContent);
    console.log(valueContent)
    valueContent = valueContent * count;
    valueContent = valueContent.toFixed(2);
    valueContent = "$" + valueContent;
    $("#items").append(
      "<tr id=1" +
        item +
        "><td>" +
        imageContent +
        "</td><td><div>" +
        item +
        "</div></td><td><div>" +
        valueContent +
        "</div></td><td><div>" +
        count +
        '</div></td><td><button onclick="removeItem(this)" id=but' +
        item +
        ">Remove</button></td></tr>"
    );
  } 
  else {
    $("#1" + item).remove();
    valueContent = valueContent.split("");
    valueContent.shift();
    $(a).data("count", ++count);
    valueContent = valueContent.join("")
    valueContent = Number(valueContent);
    valueContent = valueContent * count;
    valueContent = valueContent.toFixed(2);
    valueContent = "$" + valueContent;
    $("#items").append(
      "<tr id=1" +
        item +
        "><td>" +
        imageContent +
        "</td><td><div>" +
        item +
        "</div></td><td><div>" +
        valueContent +
        "</div></td><td><div>" +
        count +
        '</div></td><td><button onclick="removeItem(this)" id=but' +
        item +
        ">Remove</button></td></tr>"
    );
  }
}

function checkout()
{
  if($("#items").text() != undefined)
  {
  let arr1 = []
  var table = document.getElementById("items");
  for (let i = 0, row; row = table.rows[i]; i++) {
    let itemName = ""
    let total = ""
    let quantity = ""
    for (let j = 0, col; col = row.cells[j]; j++) {
      if(j == 1)
      {
        let temp = col.innerHTML
        temp = temp.split("")
        for(let d = 0; d < 5; d++)
        {
          temp.shift()
        }
        for(let d = 0; d < 6; d++)
        {
          temp.pop()
        }
        itemName = temp.join("")
          console.log(itemName)
      }
      else if(j == 2)
      {
        let temp = col.innerHTML
        temp = temp.split("")
        for(let d = 0; d < 5; d++)
        {
          temp.shift()
        }
        for(let d = 0; d < 6; d++)
        {
          temp.pop()
        }
        total = temp.join("")
          console.log(total)
      }
      else if(j == 3)
      {
        let temp = col.innerHTML
        temp = temp.split("")
        for(let d = 0; d < 5; d++)
        {
          temp.shift()
        }
        for(let d = 0; d < 6; d++)
        {
          temp.pop()
        }
          quantity = temp.join("")
          console.log(quantity)
      }
    }
    const newItem = {
      name: itemName,
      cost: total,
      amount: quantity
    };
    arr1.push(JSON.stringify(newItem));
    localStorage.setItem("reciept", JSON.stringify(arr1));
    console.log(localStorage.getItem("reciept"))  
  }
  window.location.href = '../payment/payment.html'
  }
}

function removeItem(a)
{
    let item = a.id;
    item = item.split("")
    item.shift()
    item.shift()
    item.shift()
    item = item.join("")
    $("#1" + item).remove();
}