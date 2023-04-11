let zombies = [];
function setup() {
  createCanvas(400, 400);
  
   for (let i = 0; i < 140; i++) {
    zombies.push(new Mover());
  }
}

function draw() {
  background(0, 200,100);
  
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].ayoGerak();
    zombies[i].tampil();
    zombies[i].cekBatas();
  }
}


class Mover {
  constructor(){
    this.location = createVector(random(width),random(height));
    
    this.velocity = createVector(5,0);
    this.acceleration = createVector(0.03,-0.03);
  
  }
  
  tampil(){
    stroke('red');
    fill(random(155),55,0);
    rect(this.location.x, this.location.y,10,7, radians(180),radians(120));
  }
  
  ayoGerak(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = 8;
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }

}