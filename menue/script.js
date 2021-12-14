let list = [];
$(document).ready(function () //adds items to the menu on page load
{
  console.log("")
  console.log($("#items").text())
  list = JSON.parse(localStorage.getItem("menue"));
  for (let i = 0; i < list.length; i++) {
    list[i] = JSON.parse(list[i]);
    let foodId = list[i].idName;
    let imageData = list[i].image;
    let food = list[i].name;
    let price = list[i].price; //lines 3-13 parse out the json array and then parse out items from the array
    let describe = list[i].description;
    $("#food").append(
      "<tr><td id=" +
        foodId +
        "0>" +
        "<div class='toolTip'><img src=" +
        imageData +
        '><span class="toolTipText">' +
        describe +
        "</span></div></td><td><div>" +
        food +
        "</div></td><td><div id=" +
        foodId +
        "1>$" +
        price +
        '</div></td><td><div><input type="number" name="quantity" min="1" max="10" value="1" id=' + foodId + '2></div></td><td><button onclick="addItem(this)" id=' +
        foodId +
        ">Add</button></td></tr>" //lines 14-28 build the element for menu items and appends it to the menu table
    );
  }
});

function addItem(a) {
  //adds items to the order
  let item = a.id;
  let value = "#" + item + 1;
  let image = "#" + item + 0;
  let quantity = "#" + item + 2;
  quantity = $(quantity).val();
  quantity = Number(quantity)
  let valueContent = $(value).html();
  let checker = $("#1" + item).html();
  var count = $(a).data("count") || 0; //lines 35-41 grab all the data fron the item you wish to add and formats them for the new element
  if (count < 1) {
    //this if statement runs if the item is not on the order, as tracked by the "count" data attribute attached to each element
    valueContent = valueContent.split("");
    valueContent.shift();
    valueContent = valueContent.join("");
    valueContent = Number(valueContent);
    valueContent = valueContent * quantity;
    valueContent = valueContent.toFixed(2);
    valueContent = "$" + valueContent;
    $(a).data("count", count + quantity);
    count = $(a).data("count")
    $("#items").append(
      "<tr id=1" +
        item +
        "><td><div>" +
        item +
        "</div></td><td><div>" +
        valueContent +
        "</div></td><td><div>" +
        count +
        '</div></td><td><button onclick="removeItem(this)" id=but' +
        item +
        ">Remove</button></td></tr>" //lines 45-57 construct the item in the order table
    );
  } else if (count > 1 && checker == undefined) {
    //this if statement runs if the item has been previously added to the order table, but has since been removed, it just resets the "count" attribute
    $(a).data("count", quantity);
    let count = quantity;
    $("#items").append(
      "<tr id=1" +
        item +
        "><td><div>" +
        item +
        "</div></td><td><div>" +
        valueContent +
        "</div></td><td><div>" +
        count +
        '</div></td><td><button onclick="removeItem(this)" id=but' +
        item +
        ">Remove</button></td></tr>"
    );
  } else {
    //if niether the previous two statements run, that means that this item is already in the order table, so this statement increase the quantity of the item and changes the item cost to reflect this
    $("#1" + item).remove();
    valueContent = valueContent.split("");
    valueContent.shift();
    $(a).data("count", count + quantity);
    count = $(a).data("count")
    valueContent = valueContent.join("");
    valueContent = Number(valueContent);
    valueContent = valueContent * count;
    valueContent = valueContent.toFixed(2);
    valueContent = "$" + valueContent;
    $("#items").append(
      "<tr id=1" +
        item +
        "><td><div>" +
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
  var table = document.getElementById("items");
  let total = 0
  for (let i = 0, row; (row = table.rows[i]); i++) {
    for (let j = 0, col; (col = row.cells[j]); j++) {
      if(j == 1){ 
        let temp = col.innerHTML
        temp = temp.split("")
        temp.shift()
        temp.shift()
        temp.shift()
        temp.shift()
        temp.shift()
        temp.shift()
        temp.pop()
        temp.pop()
        temp.pop()
        temp.pop()
        temp.pop()
        temp.pop()
        temp = temp.join("")
        temp = Number(temp)
        total = total + temp
        total = total.toFixed(2)
        total = Number(total)
      }
    }
  }
  $("#total").html("$" + total);

}

function checkout() {
  //this is creates the json array and puts it into local storage
  if ($("#items").text() != "") {
    //the if statement ensures that the function only operatesif there is something in the order to avoid potential errors and because you can't pay for nothing
    let arr1 = [];
    var table = document.getElementById("items");
    for (let i = 0, row; (row = table.rows[i]); i++) {
      let itemName = "";
      let total = "";
      let quantity = "";

      for (let j = 0, col; (col = row.cells[j]); j++) {
        if (j == 0) {
          let temp = col.innerHTML;
          temp = temp.split("");
          for (let d = 0; d < 5; d++) {
            temp.shift();
          }
          for (let d = 0; d < 6; d++) {
            temp.pop();
          }
          itemName = temp.join("");
        } else if (j == 1) {
          let temp = col.innerHTML;
          temp = temp.split("");
          for (let d = 0; d < 5; d++) {
            temp.shift();
          }
          for (let d = 0; d < 6; d++) {
            temp.pop();
          }
          total = temp.join("");
        } else if (j == 2) {
          let temp = col.innerHTML;
          temp = temp.split("");
          for (let d = 0; d < 5; d++) {
            temp.shift();
          }
          for (let d = 0; d < 6; d++) {
            temp.pop();
          }
          quantity = temp.join("");
        }
      }
      const newItem = {
        name: itemName,
        cost: total,
        amount: quantity,
      };
      arr1.push(JSON.stringify(newItem));
      localStorage.setItem("reciept", JSON.stringify(arr1));
    }
    window.location.href = "../payment/payment.html";
  }
}

function removeItem(a) {
  // removes the item attached to the button from the cart
  let item = a.id;
  item = item.split("");
  item.shift();
  item.shift();
  item.shift();
  item = item.join("");
  $("#1" + item).remove();
}
