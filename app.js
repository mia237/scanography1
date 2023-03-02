console.log("nothing")

function myFunctionphoto() {
    document.getElementById("demophoto").innerHTML += "Scanner ";
  }

  function myFunctiontwo() {
    document.getElementById("demo").innerHTML = "Scanner";
  }

  function myFunctionthree() {
    document.getElementById("demothree").innerHTML = "Photography";
  }

  function myFunctiony() {
    document.getElementById("demoy").innerHTML += "Photography ";
  }

  function myFunctiong() {
    var x = document.getElementById("myDIVg");
    if (x.innerHTML === "Scanography") {
      x.innerHTML = "Scanner + Photography ";
    } else {
      x.innerHTML = "Scanography";
    }
  }

  function myFunction1() {
    document.getElementById("demo1").innerHTML = "It can be done using any standard digital scanner that is connected to a device of your choosing such as a laptop, tablet, phone.";
  }

  function myFunction2() {
    document.getElementById("demo2").innerHTML = "It can be done using any standard digital scanner that is connected to a device of your choosing such as a laptop, tablet, phone etc.";
  }

  function myFunction3() {
    document.getElementById("demo3").innerHTML = "You will most likely need to keep the scanner cover open so your object doesn't get squished or moved.";
  }

  function myFunction4() {
    document.getElementById("demo4").innerHTML = "Kepp in mind that since the cover is open, the lighting in the room will show up in the scan. So working in a dark room will create a black background around your object.";
  }

  function myFunction5() {
    document.getElementById("demo5").innerHTML = "The surface of the three-dimential object that directly toutches the scanner will remain clear and detailed, while the further away something  is the blurrier it becomes.";
  }

  function myFunction6() {
    document.getElementById("demo6").innerHTML = "Throughout this page are various scanned flowers. This was done by placing the flowers and letting the scan run without moveing the flowers. ";
  }

  function myFunctionf() {
    document.getElementById("demof").innerHTML += " abstract ";
  }


  function myFunctionj() {
    var x = document.getElementById("myDIVj");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    var x = document.getElementById("jbutton");
if (x.innerHTML === "Stop scan ") {
  x.innerHTML = "Start scan ";
} else {
  x.innerHTML = "Stop scan ";
}
  }



