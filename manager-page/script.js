function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}



$(document).ready(function () {
  const image_input = document.querySelector("#file");
  var uploaded_image = "";
  image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
    });
  });
  let arr1 = [];
  if (localStorage.getItem("menue") != null) {
    arr1 = JSON.parse(localStorage.getItem("menue"));
  }
  $("#upload").on("click", function () {
    uploaded_image = getBase64Image(uploaded_image);
    const newItem = {
      image: uploaded_image,
      name: $(".nameNew").val(),
      price: $(".costNew").val(),
    };
    arr1.push(JSON.stringify(newItem));
    localStorage.setItem("menue", JSON.stringify(arr1));
  });
});
