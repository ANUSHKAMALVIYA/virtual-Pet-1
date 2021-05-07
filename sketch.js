//Create variables here
var dog, dogImg, happyDodImg, database, foods, foodstock;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg1.png");
  dogImg.png = loadImage("images/dogImg.png");
}


function draw() {  
createCanvas(500,500);
database = firebase.database();
foodstock = database.ref("Food");
foodstock.on("value",readStock);
foodstock.set(20);

dog = createSprite(250,350,10,60);
dog.addImage(dogImg1);
dog.scale = 0.2;
  
}
function draw() {
  background("green");
  if(foods!==undefined){
    textSize(20);
    fill(255);
    text("Note: Press UP ARROW TO feed DRAGO milk", 50,50);
    text("Food Remmaining:"+foods, 150,150);
    if(keyWentDown(UP_ARROW)){
      writeStok(foods);
      dog.addImage(happyDodImg);
    }
    if(keyWentDown(UP_ARROW)){
      dog.addImage(dogImg);
    }
    if(foods===0){
      foods= 200;
    }
    drawSprites();
  }
}

function writeStok(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;

  }
  database.ref("/").update({
    Food:x
  });

}

function readStock(data){
  foods = data.val();
}

