var ground, ground_image;
var beach, beach_image,rulebg,loadingbg;
var jake, jake_animation;
var logo,logo_img;
var playButton,playButton_img
var friends, cubby, izzy, friendsgroup;
var treasure, treasuregroup, box1;
var money, moneygroup, rupees;
var jewellery, jewellerygroup, box2;
var bomb, bombgroup, blast;
var missile, missilegroup, miss;
var raft1,raft1_img,raft2,raft2_img,raft3,raft3_img,raft4,raft4_img,raft5,raft5_img,raft6,raft6_img;
var loading,loading_img;
var loadingRaft,loadingRaft_img;
var gameState = "splash screen";
var score = 0;
var blastsound, win, checkPoint;
var gameover, gameoverImg, Restart, RestartImg;
var a=0,timer=0;
var rulesbg,nextbutton,storyBg,story,storyimg;
var easyButton,hardButton

function preload() {

  //ground_image
  ground_image = loadImage("splash_3.png");
  rulebg = loadImage("rules screen.jpg");
  loadingbg = loadImage("loading screen.jpg");
  nextbuttonimg =loadImage("next button.gif");
  storyBg =loadImage("story screen.jpg")
  easyButtonimg=loadImage("easybutton.png")
  hardButtonimg=loadImage("hardbutton.png")
  //logo 
  logo_img = loadImage("logo.png");
  
  //play button 
  playButton_img =loadImage("play button.gif")

  //loading image
  loading_img= loadImage("loading.gif")  

  //loading Raft
  loadingRaft_img= loadImage("loading-raft.gif")

  //beach_image
  beach_image = loadImage("beach.png");

  //jake_aniamtion
  jake_animation = loadAnimation("Jake.png", "Jake1.png");

  //cubby
  cubby = loadImage("Cubby.png");

  //Izzy
  izzy = loadImage("Izzy.png");

  //box1
  box1 = loadImage("Treasure.png");

  //rupees
  rupees = loadImage("Money.png");

  //box2
  box2 = loadImage("Jewellery.png");

  //blast
  blast = loadImage("Bomb.png");

  //miss
  miss = loadImage("Missile.png");

  //blastsound
  blastsound = loadSound("Bombblast.mp3");

  //win
  win = loadSound("Winning.mp3");

  //checkPoint
  checkPoint = loadSound("checkPoint.mp3");

  //gameOver_image
  gameOver_image = loadImage("gameOver.png");

  //Restart_image
  Restart_image = loadImage("Restartbutton.png");
}

function setup() {

  createCanvas(windowWidth,windowHeight);

  
  //logo
  logo= createSprite(width/2,150,70,0);
  logo.addImage("logo",logo_img)
  logo.scale = 0.6
  
  nextbutton= createSprite(width-100,height-100,70,0);
  nextbutton.addImage(nextbuttonimg);
  nextbutton.scale=0.3
  nextbutton.visible = false;

  nextbutton1= createSprite(width-200,200,70,0);
 nextbutton1.addImage(nextbuttonimg);
 nextbutton1.scale=0.3
  nextbutton1.visible = false;

  //loading
  loading=createSprite(width/2,height/2)
  loading.addImage("loading",loading_img)
  loading.visible = false;

  //story
  story=createSprite(width/2,height/2)
  story.visible=false
  //jake
  jake = createSprite(width/2,height/2,0,0);
  jake.addAnimation("jake", jake_animation);
  //jake.debug = true;
  jake.setCollider("circle", 10, -20, 20)
  jake.visible = true;

  //loading
  loading = createSprite(750,570);
  loading.addAnimation("loading",loading_img);
  loading.visible=false;

  //loading raft
  loadingRaft= createSprite(width/2,height/2)
  loadingRaft.addAnimation("loadingRaft",loadingRaft_img)
  loadingRaft.visible=false;

  //buttons for levels
  easyButton=createSprite(width/2 -100,height/2 +200)
  easyButton.addImage(easyButtonimg)
  easyButton.scale=2
  easyButton.visible=false
  hardButton=createSprite(width/2 +100,height/2 +200)
  hardButton.addImage(hardButtonimg)
  hardButton.scale=2
  hardButton.visible=false


  //playButton
  playButton=createSprite(width/2,550);
  playButton.addImage(playButton_img)
  playButton.scale=0.6
  
  //gameOver
  gameOver = createSprite(300, 100);
  gameOver.addImage("gameOver", gameOver_image);
  gameOver.visible = false;

  //Restart
  Restart = createSprite(300, 200);
  Restart.addImage("restart", Restart_image);
  Restart.scale = 0.2;
  Restart.visible = false;

  treasuregroup = new Group();
  friendsgroup = new Group();
  moneygroup = new Group();
  jewellerygroup = new Group();
  bombgroup = new Group();
  missilegroup = new Group();
}

function draw() {

  

  if (gameState === "splash screen") {
  background(ground_image)

  if (mousePressedOver(playButton) ){
    playButton.visible=false;
    logo.visible=false;
    gameState = "story screen";

  }
  }
  else if  (gameState === "story screen") {
    background(storyBg);
    story.visible=true;
    nextbutton.visible = true;
    if (mousePressedOver(nextbutton) ){
      nextbutton.visible=false;
      gameState = "rules screen";
    }

  }

  else if  (gameState === "rules screen") {
    background(rulebg);
   // nextbutton1.visible = true;
    easyButton.visible=true;
    hardButton.visible=true
    if (mousePressedOver(easyButton) ){
      easyButton.visible=false;
      hardButton.visible=false;
      gameState = "loading screen";
    }
  }

  else if  (gameState === "loading screen") {
    timer++;
    background(loadingbg);
    loading.visible = true;
    loadingRaft.visible = true;
    if(timer===200)
    {
      gameState = "play";
    }

  }

  else if  (gameState === "play") {
    background(beach_image);
    loading.visible = false;
    loadingRaft.visible = false;
    jake.visible = true;
    jake.y = World.mouseY;

    if (jake.isTouching(treasuregroup)) {
      a=0;
      score = score + 1;
      treasuregroup.setLifetimeEach(0);
      win.play();
    }

    if (jake.isTouching(moneygroup)) {
      a=0;
      score = score + 5;
      moneygroup.setLifetimeEach(0);
      win.play();
    }

    if (jake.isTouching(jewellerygroup)) {
      a=0;
      score = score + 10;
      jewellerygroup.setLifetimeEach(0);
      win.play();
    }

    if (jake.isTouching(friendsgroup)) {
      a=0;
      friendsgroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (jake.isTouching(bombgroup)) {
      a=0;
      bombgroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (jake.isTouching(missilegroup)) {
      a=0;
      missilegroup.setLifetimeEach(0);
      gameState = "end";
      blastsound.play();
    }

    if (a===0 && score != 0 && score % 10 === 0){
      checkPoint.play();
      a=1;
    }
    

    if (frameCount % 100 === 0) {

      var rand = Math.round(random(1, 3));


      if (rand == 1) {
        spawnBomb();
      } else if (rand == 2) {
        spawnMissile();
      } else if (rand == 3) {
        spawnFriends();
      }
    }
    if (frameCount % 60 === 0) {
    var rand = Math.round(random(1, 3));

    if (rand == 1) {
      spawnMoney();
    } 
      else if (rand == 2) {
      spawnTreasure();
    } 
      else if (rand == 3) {
      spawnJewellery();
    }
  }
  }


  if (gameState === "end") {
    gameOver.visible = true;
    Restart.visible = true;

    treasuregroup.setVelocityXEach(0);
    treasuregroup.setLifetimeEach(-1);

    friendsgroup.setVelocityXEach(0);
    friendsgroup.setLifetimeEach(-1);

    moneygroup.setVelocityXEach(0);
    moneygroup.setLifetimeEach(-1);

    jewellerygroup.setVelocityXEach(0);
    jewellerygroup.setLifetimeEach(-1);

    bombgroup.setVelocityXEach(0);
    bombgroup.setLifetimeEach(-1);

    missilegroup.setVelocityXEach(0);
    missilegroup.setLifetimeEach(-1);
  }

  if (mousePressedOver(Restart)) {
    reset();
  }
  drawSprites();
  fill("cyan");
  textSize(20);
  text("score: " + (score), 50, 50);
}

function spawnTreasure() {
  //treasure
  treasure = createSprite(width, random(60, 340), 10, 10);
  treasure.addImage("box", box1);
  treasure.velocityX = -4;
  treasure.scale = 0.1;
  treasure.lifetime = 150;
  treasuregroup.add(treasure);
}

function spawnFriends() {
  //friends
  friends = createSprite(width, random(60, 340), 10, 10);
  friends.velocityX = -4;
  friends.lifetime = 150;
  friendsgroup.add(friends);

  //rand
  var rand = Math.round(random(1, 2));

  switch (rand) {
    case 1:
      friends.addImage("cubby", cubby);
      friends.scale = 0.2;
      break;

    case 2:
      friends.addImage("Izzy", izzy);
      friends.scale = 0.1;
      break;
  }
}

function spawnMoney() {
  //money
  money = createSprite(width, random(60, 340), 10, 10);
  money.addImage("money", rupees);
  money.scale = 0.1;
  money.velocityX = -4;
  money.lifetime = width/4;
  moneygroup.add(money);
}

function spawnJewellery() {
  //jewellery
  jewellery = createSprite(width, random(60, 340), 10, 10);
  jewellery.addImage("jewellery", box2);
  jewellery.scale = 0.1;
  jewellery.velocityX = -4;
  jewellery.lifetime = width/4;
  jewellerygroup.add(jewellery);
}

function spawnBomb() {
  //bomb
  bomb = createSprite(width, random(60, 340), 10, 10);
  bomb.addImage("bomb", blast);
  bomb.scale = 0.1;
  bomb.velocityX = -4;
  bomb.lifetime = width/4;
  bombgroup.add(bomb);
}

function spawnMissile() {
  //missile
  missile = createSprite(width, random(60, 340), 10, 10);
  missile.addImage("missile", miss);
  missile.scale = 0.2;
  missile.velocityX = -4;
  missile.lifetime = width/4;
  
  missilegroup.add(missile);
}

function reset() {
  gameState = "play";

  score = 0;

  treasuregroup.destroyEach();
  friendsgroup.destroyEach();
  moneygroup.destroyEach();
  jewellerygroup.destroyEach();
  bombgroup.destroyEach();
  missilegroup.destroyEach();

  gameOver.visible = false;

  Restart.visible = false;
}