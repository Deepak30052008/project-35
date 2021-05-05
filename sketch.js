var dog,foodStock,database
var dogimage,happydogimage
var foodR;
var foodS;
function preload(){
 dogimage=loadImage("dogImg.png")
 happydogimage=loadImage("dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,350,50,50)
  dog.scale=0.2
  dog.addImage(dogimage)
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}

function draw() {  
background(46,138,89)
if(keyWentDown(UP_ARROW)){
  console.log("writeStock"+foodS)
writeStock(foodS)

dog.addImage(happydogimage)
}
fill("black")
textSize(15)
text("Food Remaining : "+foodS,150,225);
text("Note : Press up arrow to feed spikes milk ",125,20)

  drawSprites();
  //add styles here
}

function readStock(data){
foodS=data.val();
console.log(foodS)

}

function writeStock(x){
  if (x<=0){x=0}
  else{x=x-1}
  database.ref('/').update({
    Food:x
  });
}