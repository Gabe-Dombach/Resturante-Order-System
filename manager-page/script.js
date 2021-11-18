let arr1 = [];
if (localStorage.getItem("menue") != null) {
  arr1 = JSON.parse(localStorage.getItem("menue"));
}
$(document).ready(function () {
  $("#upload").on("click", function () {
    var file_data = $("#file").prop("files")[0];
    var form_data = new FormData();
    form_data.append("file", file_data);
    const newItem = {
      image: form_data,
      itemName: $(".nameNew").val(),
      itemCost: $(".costNew").val(),
    };
    arr1 = JSON.parse(localStorage.getItem("menue"));
    arr1.push(newItem);
    localStorage.setItem("menue", JSON.stringify(arr1));
  });
});
