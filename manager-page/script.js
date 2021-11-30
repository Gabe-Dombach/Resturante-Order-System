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
  document.querySelector("#file").addEventListener("change", function () {
    console.log(this.files);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      console.log(uploaded_image);
    });
    reader.readAsDataURL(this.files[0]);
  });
  $("#upload").on("click", function () {
    const newItem = {
      image: uploaded_image,
      idName: removeSpaces($(".nameNew").val()),
      name: $(".nameNew").val(),
      price: $(".costNew").val(),
    };
    arr1.push(JSON.stringify(newItem));
    localStorage.setItem("menue", JSON.stringify(arr1));
  });

  $(".removeItem").click(function () {
    arr1 = JSON.parse(localStorage.getItem("menue"));
    
    for (x = 0; x < arr1.length; x++) {
      console.log('working')
      let currentItem = JSON.parse(arr1[x]);
      if ($(".removeName").val() == currentItem.name) {
        arr1.splice(x, 1);
        console.log("removed");
        
      }
    }
    localStorage.setItem('menue',JSON.stringify(arr1))
  });
});
