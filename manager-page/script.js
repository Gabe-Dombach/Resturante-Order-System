// fetch("Resources/menue.json")
//   .then(response => response.json())
//   .then(json => console.log(json));

let uploaded_image = "";
let arr1 = [];
function buildMenue() {
  $.getJSON('Resources/menue.json', function(data){
    arr1 = data
    console.log(arr1)
    localStorage.setItem("menue", arr1);
    for (let x = 0; x < arr1.length; x++) {
      const iter = JSON.parse(arr1[x]);
      $(".menue").append(
        "<li class=" +
          iter.idName +
          "><img src='" +
          iter.image +
          "' '><p>" +
          iter.name +
          ": $" +
          iter.price +
          "</p>"
      );
    }

  });
  
}
function removeSpaces(x) {
  x = x.split("");
  for (let a = 0; a < x.length; a++) {
    if (x[a] == " ") {
      x.splice(a, 1);
    }
  }
  x = x.join("");
  console.log(x);
  return x;
}
$(document).ready(function () {

console.log();
  if (localStorage.getItem("menue") == null) {
    buildMenue();
  } else {
    let addedITems = JSON.parse(localStorage.getItem("menue")); //automaticly pull any added items from localStorage  and add them to the manager page
    let newAddedItems = [];
    for (let x = 0; x < addedITems.length; x++) {
      newAddedItems.push(JSON.parse(addedITems[x]));
    }
    for (let x = 0; x < newAddedItems.length; x++) {
      const iter = newAddedItems[x];
      $(".menue").append(
        "<li class=" +
          iter.idName +
          "><img src='" +
          iter.image +
          "' '><p>" +
          iter.name +
          ": $" +
          iter.price +
          "</p>"
      );
    }
  }
  document.querySelector("#file").addEventListener("change", function () {
    console.log(this.files); //automaticly generate base64 data url when image file is uploaded
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      console.log(uploaded_image);
    });
    reader.readAsDataURL(this.files[0]);
  });
  $("#upload").on("click", function () {
    const newItem = {
      //create new object for new item
      image: uploaded_image,
      idName: removeSpaces($(".nameNew").val()),
      name: $(".nameNew").val(),
      description: $(".descNew").val(),
      price: $(".costNew").val(),
    };
    arr1 = JSON.parse(localStorage.getItem("menue"));
    arr1.push(JSON.stringify(newItem)); //add new item to array and store in local storage
    localStorage.setItem("menue", JSON.stringify(arr1));
    location.reload();
  });
  $("li").click(function () {
    console.log("remove func runing");
    let myClass = this.className;
    console.log(myClass);
    let removeList = JSON.parse(localStorage.getItem("menue"));
    //remove item from local storage and the manager page
    for (let x = 0; x < removeList.length; x++) {
      console.log("working");
      let currentItem = JSON.parse(removeList[x]);
      if (myClass == currentItem.idName) {
        removeList.splice(x, 1);
        localStorage.setItem("menue", JSON.stringify(removeList));
        console.log("removed");
        location.reload();
      }
    }
  });
});
