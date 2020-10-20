//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImage1,dogImage2;

function preload()
{
  //load images here
  dogImage1=loadImage("images/dogImg1.png");
  dogImage2=loadImage("images/dogImg.png");
  
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(200,300,15,15);
  dog.addImage("dogImg",dogImage1);
}


function draw() { 
  background(46,139,87);
  
  if(keyCode===UP_ARROW){
    writeStock(foodS);
    dog.addImage(dogImage2);
  }

  drawSprites();
  //add styles here
  text("Note: Press UP_ARROW key to feed the dog milk");
  //testSize(15);
  stroke(48);
  fill("red");
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  
  database.ref('/').update({
    Food:x
  })
}



