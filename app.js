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




    function myFunctionphotoR() {
      document.getElementById("demophotoR").innerHTML += "T ";
    }
  


function myFunctionf() {
  document.getElementById("demof").innerHTML += " abstract ";
}


function myFunctionmove() {
  document.getElementById("demomove").innerHTML += "movements ";
}


            function myFunctionhead() {
              document.getElementById("sub1").innerHTML = "By dragging the object vertically as it scans, you can stretch the object.";
            }

            function myFunctionhead1() {
              document.getElementById("sub3").innerHTML = "By dragging the object horizontally as it scans, you can warp the object.";
            }

            function myFunctionhead2() {
              document.getElementById("sub4").innerHTML = "By picking up and placing the object in a new position as it scans, you can relocate the object.";
            }
            function myFunctionhead3() {
              document.getElementById("sub6").innerHTML = "By scanning see-through objects, such as saran-wrap, platic, or glass, you can add texture.";
            }
            function myFunctionhead4() {
              document.getElementById("sub8").innerHTML = "By placing objects ontop of eachother, you can add layers to the scan.";
            }
          
            function myFunctionHi() {
              let id = null;
              const elem = document.getElementById("animate");   
              let pos = 0;
              clearInterval(id);
              id = setInterval(frame, 10);
              function frame() {
                if (pos == 370) {
                  clearInterval(id);
                  elem.style.opacity = 0;
                } else {
                  pos++; 
                  elem.style.top = pos + "px"; 
                  elem.style.left = pos + "-50px"; 
                  elem.style.opacity = 1;
                }
              }
            }
        

function myFunctionHi2() {
  let id = null;
  const elem = document.getElementById("animate2");   
  let pos = 90;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 490) {
      clearInterval(id);
      elem.style.opacity = 0;
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
      elem.style.opacity = 1;
    }
  }
}


function myFunctionrel() {
  var x = document.getElementById("myDIVrel");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function myFunctionrel4() {
  var x = document.getElementById("myDIVrel4");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunctionrel1() {
  var x = document.getElementById("myDIVrel1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function myFunctionrel3() {
  var x = document.getElementById("myDIVrel3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

    function myFunctionrel2() {
      var x = document.getElementById("myDIVrel2");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    function myFunctionrel6() {
      var x = document.getElementById("myDIVrel6");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }

    function myFunctionsub55() {
      document.getElementById("sub55").innerHTML += " <br> Through combining these different movements togehter, you can create some really intersting and abstract works. ";
    }

    function myFunctionworks() {
      document.getElementById("demoworks").innerHTML += " &nbsp;&nbsp;w&nbsp;&nbsp;o&nbsp;&nbsp;r&nbsp;&nbsp;k&nbsp;&nbsp;s ";
    }

    function myFunctionhh11() {
      document.getElementById("hh11111").innerHTML += " works ";
    }
    
    function myFunctionhb() {
      document.getElementById("hb").innerHTML += "<br> artists' ";
    }
