function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Takes and shows the item name, cost, and amount
$(document).ready(function () {
  let reciept = JSON.parse(localStorage.getItem("reciept"));
  console.log(reciept);
  for (let i = 0; i < reciept.length; i++) {
    let obj = JSON.parse(reciept[i]);
    $("#item").append("<tr><td><p>" + obj.name + "</p></td></tr>");

    $("#cost").append("<tr><td><p>" + obj.cost + "</p></td></tr>");

    $("#amount").append("<tr><td><p>" + obj.amount + "</p></td></tr>");
  }
  if (
    localStorage.getItem("tax-Decimal") == null 
  ) {
    console.log('working');
    let te = localStorage.getItem("userEmail");
    let t = localStorage.getItem("total");
    document.getElementById("tt").innerHTML =
      "Hello " +
      te +
      " your total is $" +
      t +
      " with $ 0 as your tax. Thank you for buying.";
  } else {
    let t = localStorage.getItem("total");
    let tx = localStorage.getItem("tax-Decimal");
    let x = t * tx - t;
    x = x.toFixed(2);
    let te = localStorage.getItem("userEmail");
    console.log(te);
    console.log('working2');
    document.getElementById("tt").innerHTML =
    "Hello " +
    te +
    " your total is $" +
    t +
    " with "+ x+" as your tax. Thank you for buying.";

  }
  // This will run the total and the tax

  $("#send").click(function () {
    // Start file download
    let reciept = JSON.parse(localStorage.getItem("reciept"));
    let text = "User:" + localStorage.getItem("userEmail") + "\n";
    for (let a = 0; a < reciept.length; a++) {
      let curOb = JSON.parse(reciept[a]);
      text = text.concat(
        "Name: " +
          curOb.name +
          ",\nQuantity: " +
          curOb.amount +
          ",\nCost: " +
          curOb.cost +
          "\n"
      );
    }
    text = text.concat(
      "subTotal: $" + JSON.parse(localStorage.getItem("total")) + "\n"
    );
    if (localStorage.getItem("tax-Decimal") == null) {
      text = text.concat(
        "Total: $" + JSON.parse(localStorage.getItem("total")) + "\n"
      );
    } else {
      let afterTax = eval(
        localStorage.getItem("tax-Decimal") *
          JSON.parse(localStorage.getItem("total"))
      );
      afterTax = parseFloat(afterTax);
      afterTax = afterTax.toFixed(2);
      text = text.concat("Total: $" + afterTax);
    }

    download("reciept.txt", text);
  });
});
/*
  $(".fun").attr(
    "href",
    '<a href = "mailto:' +
      localStorage.getItem("userEmail") +
      "?body=" +
      $(items).html() +
      '">Send Feedback</a>'
  );

function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "gabrieldombach@gmail.com",
      Password : 'C5B0A8D8A597EC034EA7FB7F3A0A3875BA52',
      To :'gdombach009@gmail.com', JSON.parse(localStorage.getItem('userEmail')),
      From : "gabrieldombach@gmail.com",
      Subject : "Your Recipt",
      Body : $('.bought').html()
      }).then(
        message => alert(message)
      );
      }


function initDownload() {
  let reciept = JSON.parse(localStorage.getItem("reciept"));

  let text = "";
  for (let a = 0; a < reciept.length; a++) {
    let curOb = JSON.parse(reciept[a]);
    text = text.concat(
      "Name: " +
        curOb.name +
        ", Quantity: " +
        curOb.amount +
        ", Cost: " +
        curOb.cost +
        "\n"
    );
  }
  text = text.concat(JSON.parse(localStorage.getItem('total')))
  download("reciept.txt", text);
}*/
