function setup() {
    createCanvas(400, 400);
    background("white")
  }
  
  function draw() {
    stroke("black");
    fill("green");
    
    
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 20, 35);
    }
  }