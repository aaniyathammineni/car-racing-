canvas = document.getElementById("myCanvas");

context = canvas.getContext("2d");

var carimage1 = "car1.png";
var carimage2 = "car2.png";
var roverimageheight = 90;
var roverimagewidth = 100;
var backrounimage = "racing.jpg";

function add() {
  backgroundtag = new Image();
  backgroundtag.src = backrounimage;
  backgroundtag.onload = drawbackground;
  car1tag = new Image();
  car1tag.src = carimage1;
  car1tag.onload = drawcar1;
  car2tag = new Image();
  car2tag.src = carimage2;
  car2tag.onload = drawcar2;
}
var car1_y = 10;
var car1_x = 10;
function drawcar1() {
  context.drawImage(car1tag, car1_x, car1_y, 120, 70);
}
var car2_x = 10;
var car2_y = 100;
function drawcar2() {
  context.drawImage(car2tag, car2_x, car2_y, 120, 70);
}
var roverxpostion = 10;
var roverypostion = 10;
function drawbackground() {
  context.drawImage(backgroundtag, 0, 0, canvas.width, canvas.height);
}
function drawrover() {
  context.drawImage(
    rovertag,
    roverxpostion,
    roverypostion,
    roverimagewidth,
    roverimageheight
  );
}

window.addEventListener("keydown", mykeypress);
function mykeypress(e) {
  if (e.keyCode == 38) {
    console.log("up arrow");
    up();
  }
  if (e.keyCode == 39) {
    console.log("right arrow");
    right();
  }
  if (e.keyCode == 37) {
    console.log("left arrow");
    left();
  }
  if (e.keyCode == 40) {
    console.log("down arrow");
    down();
  }
}
function up() {
  roverypostion = roverypostion - 10;
  drawbackground();
  drawrover();
}

function down() {
  roverypostion = roverypostion + 10;
  drawbackground();
  drawrover();
}

function left() {
  roverxpostion = roverxpostion - 10;
  drawbackground();
  drawrover();
}
function right() {
  roverxpostion = roverxpostion + 10;
  drawbackground();
  drawrover();
}
