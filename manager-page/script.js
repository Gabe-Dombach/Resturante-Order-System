let uploaded_image = "";
let arr1 = [];
function removeSpaces(x) {
  x = x.split("");
  for (let a = 0; a < x.length; a++) {
    if (x[a] == " ") {
      x.splice(a, 1);
    }
  }
  return x;
}
$(document).ready(function () {
  if (localStorage.getItem("menue") != null) {
    let addedITems = JSON.parse(localStorage.getItem("menue"));//automaticly pull any added items from localStorage  and add them to the manager page
    let newAddedItems = [];
    for (let x = 0; x < addedITems.length; x++) {
      newAddedItems.push(JSON.parse(addedITems[x]));
    }
    for (let x = 0; x < newAddedItems.length; x++) {
      const iter = newAddedItems[x];
      $(".menue").append(
        "<li><img src='" +
          iter.image +
          "'><p>" +
          iter.name +
          ": $" +
          iter.price +
          "</p>"
      );
    }
  }
  document.querySelector("#file").addEventListener("change", function () {
    console.log(this.files);//automaticly generate base64 data url when image file is uploaded
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      console.log(uploaded_image);
    });
    reader.readAsDataURL(this.files[0]);
  });
  $("#upload").on("click", function () {
    const newItem = {//create new object for new item
      image: uploaded_image,
      idName: removeSpaces($(".nameNew").val()),
      name: $(".nameNew").val(),
      price: $(".costNew").val(),
    };
    arr1.push(JSON.stringify(newItem));//add new item to array and store in local storage
    localStorage.setItem("menue", JSON.stringify(arr1));
    $(".menue").append(
      "<li><img src='" +
        newItem.image +
        "'><p>" +
        newItem.name +
        ": $" +
        newItem.price +
        "</p>"
    );
  });

  $(".removeItem").click(function () {
    arr1 = JSON.parse(localStorage.getItem("menue"));
//remove item from local storage and the manager page
    for (x = 0; x < arr1.length; x++) {
      console.log("working");
      let currentItem = JSON.parse(arr1[x]);
      if ($(".removeName").val() == currentItem.name) {
        arr1.splice(x, 1);
        console.log("removed");
      }
    }
    localStorage.setItem("menue", JSON.stringify(arr1));
  });
});
