

   $(document).ready(function () {
  $("#showme").click(function(){
    $(".address").show()
    alert("Please enter your Address")
    $(this).css('background-color','orange');
    $(this).css('color','white');
    $(this).css('border','black');
    $(this).css('padding','10px');
    $("#hideme").css('background-color','rgb(175, 170, 170)');
    $("#hideme").css('color','black');
    $("#hideme").css('border','white');
    $("#hideme").css('padding','5px');
  })
  
  $("#hideme").click(function(){
    $(".address").hide()
    $(this).css('background-color','orange');
    $(this).css('color','white');
    $(this).css('border','black');
    $(this).css('padding','10px');
    $("#showme").css('background-color','rgb(175, 170, 170)');
    $("#showme").css('color','black');
    $("#showme").css('border','white');
    $("#showme").css('padding','5px');
  })

    $("#card").click(function(){
        $(this).css('background-color','rgba(255, 255, 255)');
        $(this).css('color','black');
        $("#cash").css('background-color','rgb(53, 51, 49)')
        $("#cash").css('color','white');
    })
    $("#cash").click(function(){
        $(this).css('background-color','rgba(255, 255, 255)');
        $(this).css('color','black');
        $("#card").css('background-color','rgb(53, 51, 49)')
        $("#card").css('color','white');
    })
   })

   