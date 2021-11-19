


$(document).ready(function () {
  const image_input = document.querySelector("#file");
  var uploaded_image = "";
  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.readAsDataURL(image_input);
    });
  });
  let arr1 = [];
  if (localStorage.getItem("menue") != null) {
    arr1 = JSON.parse(localStorage.getItem("menue"));
  }
  $("#upload").on("click", function () {
    
    const newItem = {
      image: uploaded_image,
      name: $(".nameNew").val(),
      price: $(".costNew").val(),
    };
    arr1.push(JSON.stringify(newItem));
    localStorage.setItem("menue", JSON.stringify(arr1));
  });
});
