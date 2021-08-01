  var PathImg,Path,PowerImg,BombImg,CoinImg,Boundary1;
  var EnergyDrinkImg,JakeAni,running,RunnerAni,Boundary2;
  function preload(){
  //Pre-Load Images
  PathImg = loadImage("path.png");
  PowerImg = loadImage("power.png");
  BombImg = loadImage("bomb.png");
  CoinImg = loadImage("coin.png");
  EnergyDrinkImg = loadImage("energyDrink.png");
  JakeAni = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
  RunnerAni=loadAnimation("Runner-1.png","Runner-2.png");
  }

  function setup(){
  createCanvas(1350,700);

  //create Path sprites here
  Path = createSprite(500,604);
  Path.addImage(PathImg);
  //Scalling Path
  Path.scale=1.2;
  Path.velocityY=4;

  //create Jake sprites here
  Jake = createSprite(500,300);
  Jake.addAnimation("running",JakeAni);
  //Scalling Jake
  Jake.scale=1;

  //create RunnerAni sprites here
  Runner = createSprite(500,600);
  Runner.addAnimation("running",RunnerAni);
  //Scalling RunnerAni
  Runner.scale=0.1;

  //create Coin sprites here
  Coin = createSprite(400,300);
  Coin.addImage(CoinImg);
  //Scalling Coin
  Coin.scale=0.50;
  //Coin moving
  Coin.velocityY=0.5;
 
  //create Bomb  sprites here
  Bomb = createSprite(500,0);
  Bomb.addImage(BombImg);
  //Scalling Bomb 
  Bomb.scale=0.2;
  //Bomb  moving
  Bomb.velocityY=0.5;

  //create EnergyDrink sprites here
  EnergyDrink = createSprite(600,160);
  EnergyDrink.addImage(EnergyDrinkImg );
  //Scalling EnergyDrink
  EnergyDrink.scale=0.1;
  //EnergyDrink  moving
  EnergyDrink.velocityY=0.5;

  //create PowerImg sprites here
  Power = createSprite(600,-200);
  Power.addImage(PowerImg);
  //Scalling PowerImg
  Power.scale=0.3;
  //PowerImg moving
  Power.velocityY=0.5;

  Boundary1=createSprite(330,300,30,200);
  Boundary2=createSprite(678,300,30,200);
  
  }
  

  function draw (){
  if(Path.y > 400){
  Path.y=height/3;
  }
  //invisible obstacles
  if (Jake.isTouching(Bomb)){
  Bomb.visible=false; 
  }
  if (Jake.isTouching(Power)){
  Power.visible=false; 
  }
  if (Jake.isTouching(Coin)){
  Coin.visible=false; 
  }
  if (Jake.isTouching( EnergyDrink)){
  EnergyDrink.visible=false; 
  }
  if (keyDown("left")) {
 Jake.x=Jake.x-3
  }  
  if (keyDown("right")) {
  Jake.x=Jake.x+3
  }
  Boundary1.visible=false;
  Boundary2.visible=false;
  //collide for boundary
  Jake.collide(Boundary1);
  Jake.collide(Boundary2);
  drawSprites();

  }