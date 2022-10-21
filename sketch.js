var playercount = 0;
var player;
var database;
var playerIndex = null;
var gamestate = 0;
var game;
var wkey;
var bkey;
var  cKey 
var  dKey 
var  eKey 
var  fKey 
var  gKey 
var  aKey 
var  bKey 
var  csKey 
var dsKey
  var gsKey 
  var  fsKey 
  var  asKey
  var cstate = false;

var form;
//var arr = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"]
function preload() {
   //wkey = loadImage("wkey.png");
  // bkey = loadImage("bkey.png");
   cKey = loadImage("C.png") 
   dKey = loadImage("D.png") 
   eKey = loadImage("E.png") 
   fKey = loadImage("F.png") 
   gKey = loadImage("G.png") 
 aKey = loadImage("A.png") 
 
bKey = loadImage("B.png") 
   csKey = loadImage("Csharp.png") 
   dsKey = loadImage("Dsharp.png") 
  gsKey = loadImage("Gsharp.png")
   fsKey = loadImage("Fsharp.png") 
   asKey = loadImage("Asharp.png") 
  
 }
function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  form = new Form();
  form.display();
  player = new Player();
  player.getCount();
  game = new Game();
  game.getState();
  
}



function draw() {
  background("white");
  if(playercount == 2){
    game.updateState(1);
  }
 if(gamestate == 1){
  game.start();
 }
  drawSprites();
}
