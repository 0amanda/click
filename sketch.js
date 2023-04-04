let red;
let fr = 6;
let x, y;
let fillopacity;


function setup() {
  createCanvas(2550, 1080);
  pixelDensity(1);
  frameRate(fr);
  red = new Riso('red');
  background(255,255,255);
  clearRiso();
}

function draw() {

    red.noStroke();

    red.fill(50);
    red.ellipse( mouseX, mouseY, 140, 140);
    if (mouseIsPressed) {
        red.fill(100);
        red.ellipse(mouseX, mouseY, 200, 200);
        red.fill(50);
        red.ellipse(mouseX, mouseY, 300, 300);}

    background(255,255,255,255);


    fr = 6;
      frameRate(fr);


    drawRiso();
  
}


function keyTyped() {
    if (key === 'r') {
    // when the user presses r, export the current image and stop
    exportRiso();
}}
{
function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        noLoop();
    } else if (keyCode === RIGHT_ARROW) {
        loop();
    }
}
}