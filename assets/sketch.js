var gravity = 0;
var initialCircles = 5;
var circlesArray = []; 
var namestr = "GONZALO CONTALDO";
var idx = 0;
var fill_color = (0, 0, 0);

class Circles {
  constructor(pos, vel, radius, fill_color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.fill_color = fill_color;
  }
  
  drawself() {
    this.vel.y += gravity;
    this.pos.add(this.vel);
    
    if (this.pos.x + this.radius >= width){
      this.vel.x *= -1;
      this.pos.x = width - this.radius;
      change_text_color();
    }
    
    if (this.pos.x - this.radius <= 0) {
      this.vel.x *= -1;
      this.pos.x = 0 + this.radius;
      change_text_color();
    }
    
    if (this.pos.y + this.radius >= height) {
      this.vel.y *= -1;
      this.pos.y = height - this.radius;
      change_text_color();
    }
    
    if (this.pos.y - this.radius <= 0){
      this.vel.y *= -1;
      this.pos.y = 0 + this.radius;
      change_text_color();
    }
    
    fill(this.fill_color[0], this.fill_color[1], this.fill_color[2]); 
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }
}

function createCirc(pos, radius) {
    vel = createVector(random(-5, 5), random(-5, 5));
    rgb = [random(0, 255), random(0, 255), random(0, 255)];
  
    circ = new Circles(pos, vel, radius, rgb);
    circlesArray.push(circ);
}
  
var Arial, Bahnschrift, Lucida, Onyx, JhengHei;
// Load fonts in preload function

var fonts;
// function preload() {
//     Arial = loadFont("fonts/FluffyFurr-Regular.otf");
//     Bahnschrift = loadFont("fonts/Dedicool.ttf");
//     Lucida = loadFont("fonts/BloodieCurse-Regular.otf");
//     Onyx = loadFont("fonts/Amorria-Brush.otf");
//     JhengHei = loadFont("fonts/Rutex.ttf");
// }

function setup() {
    let canvas = createCanvas(windowWidth, 600);
    canvas.parent("sketch-holder");
    background(255);
    fill(0);
    
    for (let i = 0; i < initialCircles; i++) {
        radius = random(30, 45);
        posX = random(0 + radius, width - radius);
        posY = random(0 + radius, height - radius);
        pos = createVector(posX, posY);
        createCirc(pos, radius);
    }
    
    fonts = [Arial, Onyx, Bahnschrift, Lucida, JhengHei];
}

var idx;
function change_font() {
  idx = (idx + 1) % fonts.length;
}

function change_text_color() {
  fill_color = [random(0, 255), random(0, 255), random(0, 255)];
}

function draw() {
  // background(255);
  strokeWeight(1)
  for (let n = 0; n < circlesArray.length; n++) {
    circ = circlesArray[n];
    circ.drawself();
  }
  
  fill(fill_color);
  stroke(0,0,0)
  strokeWeight(6)
  textSize(50);
  textAlign(CENTER, CENTER);
  text(namestr, width / 2, height / 2);
}

function mousePressed() {
  radius = random(30, 45);
  pos = createVector(mouseX, mouseY);
  createCirc(pos, radius);
}


// function setup() {
//   let canvas = createCanvas(400, 400);
//   canvas.parent('sketch-holder');  
//   noCursor();
 
//   frameRate(60);
//   //colorMode(HSB,360,100,100);
//   rectMode(CENTER);
//   noStroke();
 
//   background(255);
// }

// var w = 25;
// var h = 25;

// var x = 200;
// var y = 200;

// var threshold = 150;

// function draw() {
 
//   //d=√((x_2-x_1)²+(y_2-y_1)²)
//   d = int(dist(x,y,mouseX,mouseY))
//   //console.log(d)

//   //circle(x,y,threshold)
//   /*OldRange = (OldMax - OldMin)  
//   NewRange = (NewMax - NewMin)  
//   NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin*/
//   if (d < threshold) {
//    //line(x,y,mouseX,mouseY)
//     mult = (-1/(threshold))*Math.pow(d,2)+threshold
//     mult = (((mult - 0) * (2 - 0.1)) / (threshold - 0)) + 0.1
//     // console.log(mult)
//     x += (x - mouseX)/20*mult;
//     y += (y - mouseY)/20*mult;
//   }
 
//   fill(0,255);
//   rect(x,y,w,h);
 
//   fill(0,255);
//   circle(mouseX,mouseY,20);
 
//   blendMode(ADD);
//   fill(255,20);
//   rect(0,0,width*2,height*2);  // subtract 1 from every pixel
//   blendMode(BLEND);
//   //console.log(pixelDensity())
 
//   x = Math.max(w/2, Math.min(x, width-w/2));
//   y = Math.max(h/2, Math.min(y, height-h/2));
//   /*x = max(w/2,min(width-w/2,x))
//   y = max(h/2,min(height-h/2,x))*/

// }