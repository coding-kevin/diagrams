//selection for flipping object
const targetImage = document.querySelector(".objectImage");
const flipButton = document.querySelector(".flipObjectButton");

//diagram selection
let diagramButton = document.querySelector(".eye-con");
let line = document.querySelectorAll(".front-line");
let diagramText = document.querySelectorAll(".diagramText");
let flippedLine = document.querySelectorAll(".flipped-line");
let flippedDiagramText = document.querySelectorAll(".flippedDiagramText");

let diagrammed = false;
let reversed = false;

window.onload = function objectImageFunction() {
  //is this needed?
  //object Flip
  flipButton.addEventListener("click", () => {
    //clean this up to match diagramobject (take out from addeventlistener)

    console.log(diagrammed);
    console.log(reversed);

    //back, diagrammed

    if (
      targetImage.src ===
        `http://127.0.0.1:5501/diagrams/img/${targetImage.id}-Reverse.png` &&
      diagrammed === true
    ) {
      diagramObject();
      targetImage.src = `./img/${targetImage.id}.png`;
      diagrammed = false;
      reversed = false;
    }
    //back, undiagrammed
    else if (
      targetImage.src ===
        `http://127.0.0.1:5501/diagrams/img/${targetImage.id}-Reverse.png` &&
      diagrammed === false
    ) {
      targetImage.src = `./img/${targetImage.id}.png`;
      reversed = false;
    }
    // front, undiagrammed
    else if (
      targetImage.src ===
        `http://127.0.0.1:5501/diagrams/img/${targetImage.id}.png` &&
      diagrammed === false
    ) {
      targetImage.src = `./img/${targetImage.id}-Reverse.png`;
      diagrammed = false;
      reversed = true;
    }
    // front, diagrammed
    else {
      targetImage.src = `./img/${targetImage.id}-Reverse.png`;
      diagramObject();
      diagrammed = false;
      reversed = true;
    }
  });
  function diagramObject() {
    if (diagrammed === true) {
      diagrammed = false;
    } else {
      diagrammed = true;
    }
    if (reversed === false) {
      for (let i = 0; i < line.length; i += 1) {
        line.item(i).classList.toggle("lineAnimate");
        diagramText.item(i).classList.toggle("diagramTextAnimate");
      }
    } else {
      for (let i = 0; i < flippedLine.length; i += 1) {
        flippedLine.item(i).classList.toggle("lineAnimate");
        flippedDiagramText.item(i).classList.toggle("diagramTextAnimate");
      }
    }
  }

  //Diagram Button
  diagramButton.addEventListener("click", diagramObject);
};

//with thanks to
//https://jimfrenette.com/code-editors/sandbox/responsive-hotspots/

//diagramObject function is located within other (diagramButton) function
