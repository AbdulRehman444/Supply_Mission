var helicopterIMG, helicopter , box , boxIMG;
var ground,groundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var RightBox, CenterBox, LeftBox;

function preload() {
  helicopterIMG = loadImage("helicopter.png");
  boxIMG = loadImage("box.png");
  groundImg=loadImage("back.jpg")
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);

  box= createSprite(width / 2, 80, 10, 10);
  box.addImage(boxIMG);
  box.scale = 0.2;

  helicopter = createSprite(width / 2, 200, 10, 10);
  helicopter.addImage(helicopterIMG);
  helicopter.scale = 0.6;

  ground = createSprite(width / 2, height + 35, width, 10);
  engine = Engine.create();
  world = engine.world;

  boxBody = Bodies.circle(width / 2, 200, 5, {
    restitution: 0.6,
    isStatic: true,
  });
  World.add(world, boxBody);

  var options = {
    isStatic: true,
  };

  //Create a Ground
  ground = Bodies.rectangle(width / 2, 650, width, 10, options);
  World.add(world, ground);

 
  LeftBox = createSprite(300, 610, 20, 100);
  LeftBox.shapeColor = color("yellowGreen");

  CenterBox = createSprite(400, 650, 200, 20);
  CenterBox.shapeColor = color("yellowGreen");

  RightBox = createSprite(500, 610, 20, 100);
  RightBox.shapeColor = color("yellowGreen");

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(groundImg);
  box.x = boxBody.position.x;
  box.y = boxBody.position.y;

  box.x = helicopter.x;

  if (keyDown("down")) {
    Matter.Body.setStatic(boxBody, false);
  }

  if (keyDown("right")) {
    helicopter.x = helicopter.x+5
  }
  if (keyDown("left")) {
    helicopter.x = helicopter.x-5
  }
  drawSprites();
}






