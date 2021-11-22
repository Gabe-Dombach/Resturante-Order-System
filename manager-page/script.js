let arr1 = []
let uploaded_image = '';
$(document).ready(function () {
document.querySelector('#file').addEventListener('change',function(){
  console.log(this.files)
  const reader = new FileReader();
reader.addEventListener('load',()=>{
   uploaded_image = reader.result
  console.log(uploaded_image)
})
  reader.readAsDataURL(this.files[0]);

})
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
