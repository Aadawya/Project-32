const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var rebirth;

function preload() {
    // create getBackgroundImg( ) here
    getp();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
     background(backgroundImg)   
    }

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
fill("black")
textSize(30)
if(rebirth>=12){
 text("TIME:"+rebirth%12+"pm",50,100)   
}
else if(rebirth==0){
 text("TIME:12am",50,100)   
}
else{
 text("TIME:"+rebirth%12+"am",50,100)   
}
}


async function getp(){
    var pl=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var un = await pl.json();
    var der=un.datetime
     rebirth=der.slice(11,13)
    console.log(rebirth)
    if(rebirth>=04&&rebirth<=06){
     bg="sunrise1.png"
       
    }
  else  if(rebirth>=06&&rebirth<=08){
        bg="sunrise2.png"
          
       }
       else  if(rebirth>=08&&rebirth<=11){
        bg="sunrise3.png"
          
       }
       else  if(rebirth>=11&&rebirth<=13){
        bg="sunrise4.png"
          
       }
       else  if(rebirth>=13&&rebirth<=15){
        bg="sunrise5.png"
          
       }
       else  if(rebirth>=15&&rebirth<=17){
        bg="sunrise6.png"
          
       }
       else  if(rebirth>=17&&rebirth<=18){
        bg="sunset7.png"
          
       }
       else  if(rebirth>=18&&rebirth<=20){
        bg="sunset8.png"
          
       }
       else  if(rebirth>=20&&rebirth<=23){
        bg="sunset9.png"
          
       }
       else  if(rebirth>=23&&rebirth==00){
        bg="sunset10.png"
          
       }
       else  if(rebirth==00&&rebirth<=03){
        bg="sunset11.png"
          
       }
    else{
     bg="sunset12.png"   
    }
    backgroundImg=loadImage(bg)
    }
