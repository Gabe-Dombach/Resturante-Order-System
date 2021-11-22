let list = []

$(document).ready(function(){
  list = JSON.parse(localStorage.getItem("menue"))
  for(let i = 0; i < list.length; i++)
  {
    list[i] = JSON.parse(list[i])
    console.log(list[i])
    let foodId = list[i].idName
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
  var count = $(a).data("count") || 0;
  if (count < 1) {
    let item = a.id;
    let value = "#" + item + 1;
    let image = "#" + item + 0;
    let imageContent = $(image).html();
    let valueContent = $(value).html();
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
        "</div</td></tr>"
    );
  } else {
    let item = a.id;
    $("#1" + item).remove();
    let value = "#" + item + 1;
    let image = "#" + item + 0;
    let imageContent = $(image).html();
    let valueContent = $(value).html();
    console.log(valueContent)
    valueContent = valueContent.split("");
    valueContent.shift();
    // for (let i = 0; i < 100; i++) {
    //   let current = valueContent.length;
    //   current = current - 1;
    //   if (valueContent[current] == " ") {
    //     valueContent.pop();
    //   } else {
    //     valueContent.pop();
    //     break;
    //   }
    // }
    $(a).data("count", ++count);
    console.log(count)
    valueContent = valueContent.join("")
    valueContent = Number(valueContent);
    console.log(valueContent)
    valueContent = valueContent * count;
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
        '</div</td><td><button onclick="removeItem(this)" id=' +
        item +
        "item>Remove one</tr>"
    );
  }
}
