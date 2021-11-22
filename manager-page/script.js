let uploaded_image = '';
let arr1 = [];
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
    let uploadName = '.nameNew';
    let costNew = 'costNew';
    $('.menue').append('<li><img src='+uploaded_image+' alt='+$(uploadName).val()+'><p>$ '+$(costNew).val()+'</p>')
    var ul = document.getElementsByClassName("menue");
    var items = ul.getElementsByTagName("li");
    for(let x=0; x< items.length; x ++){
      arr1.push(items[x])
    }    
    
    arr1.push(JSON.stringify(newItem));
    localStorage.setItem("menue", JSON.stringify(arr1));
  });
});
