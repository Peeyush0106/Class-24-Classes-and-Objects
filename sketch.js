const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, box1, box2, box3, box4, box5;
var ground, pig1, pig2, log1, log2, log3, log4, bird;

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(900, 320, 70, 70);
  box3 = new Box(700, 220, 70, 70);
  box4 = new Box(900, 220, 70, 70);
  box5 = new Box(800, 120, 70, 70);

  ground = new Ground(600, 390, 1200, 20);

  log1 = new Log(800, 170, 300, PI / 2);
  log2 = new Log(800, 270, 300, PI / 2);
  log3 = new Log(760, 120, 150, PI / 7);
  log4 = new Log(870, 120, 150, -PI / 7);

  pig1 = new Pig(800, 175);
  pig2 = new Pig(800, 275);

  bird = new Bird(100, 100);

  // pig = new Pig(600, 310, 800, 20);

  // var ball_options = {
  //   restitution: 0.8
  // }
  // ball = Bodies.circle(200, 200, 40, ball_options);
  // var ground_options = {
  //   isStatic: true
  // }
  // ground = Bodies.rectangle(400, 380, 800, 20, ground_options);
  // World.add(world, ground);
  // World.add(world, ball);
}

function draw() {
  background(0);
  Engine.update(engine);
  text("MouseX :" + mouseX);
  text("MouseY :" + mouseY);
  // rectMode(CENTER);
  // rect(ground.position.x, ground.position.y, 800, 20);
  // ellipseMode(RADIUS);
  // ellipse(ball.position.x, ball.position.y, 40);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  ground.display();
  pig1.display();
  pig2.display();
  bird.display();
}