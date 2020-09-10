const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,ball2,box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    console.log(ground);

    var ball_options = {
  restitution:1
    }

    ball = Bodies.circle(200,200,10,ball_options);
    World.add(world,ball);

    ball2 = Bodies.circle(250,250,20);
    World.add(world,ball2);

    box = Bodies.rectangle(150,200,40,40);
    World.add(world,box);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill ("yellow");
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);

    fill ("red");
    ellipse(ball.position.x,ball.position.y,10,10);

   // circleMode(RADIUS);
    fill("blue");
    circle(ball2.position.x,ball2.position.y,20);

    rectMode(CENTER);
    fill ("green");
    rect(box.position.x,box.position.y,40,40);
    
}