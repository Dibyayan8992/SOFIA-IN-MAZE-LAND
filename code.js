var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sofia=createSprite(20,25,18,18);
sofia.shapeColor="orange";
var cardboard1=createSprite(100,300,10,100);
cardboard1.shapeColor="brown";
var cardboard2=createSprite(110,150,10,100);
cardboard2.shapeColor="brown";
var cardboard3=createSprite(148,28,11,100);
cardboard3.shapeColor="brown";
var cardboard4=createSprite(47,97,100,10);
cardboard4.shapeColor="brown";
var cardboard5=createSprite(101,52,30,10);
cardboard5.shapeColor="brown";
var cardboard6=createSprite(398,351,100,10);
cardboard6.shapeColor="brown";
var cardboard7=createSprite(200,301,100,10);
cardboard7.shapeColor="brown";
var cardboard8=createSprite(397,102,200,10);
cardboard8.shapeColor="brown";
var cardboard9=createSprite(98,252,100,10);
cardboard9.shapeColor="brown";
var cardboard10=createSprite(148,232,90,10);
cardboard10.shapeColor="brown";
var cardboard11=createSprite(150,129,60,10);
cardboard11.shapeColor="brown";
var cardboard12=createSprite(215,101,70,10);
cardboard12.shapeColor="brown";
var cardboard13=createSprite(299,50,100,10);
cardboard13.shapeColor="brown";
var cardboard14=createSprite(300,151,100,10);
cardboard14.shapeColor="brown";
var cardboard15=createSprite(299,10,100,10);
cardboard15.shapeColor="brown";
var cardboard16=createSprite(251,396,10,100);
cardboard16.shapeColor="brown";
var cardboard17=createSprite(199,198,100,10);
cardboard17.shapeColor="brown";
var cardboard18=createSprite(300,198,10,100);
cardboard18.shapeColor="brown";
var cardboard19=createSprite(398,186,20,90);
cardboard19.shapeColor="brown";
var cardboard20=createSprite(247,347,100,10);
cardboard20.shapeColor="brown";
var cardboard21=createSprite(70,148,100,10);
cardboard21.shapeColor="brown";
var cardboard22=createSprite(397,300,200,10);
cardboard22.shapeColor="brown";
var cup=createSprite(397,400,10,60);
cup.shapeColor="yellow";
sofia.velocityX=0;
sofia.velocityY=0;

function draw() {
background("lime");

  if (keyDown("UP_ARROW")) {
  
    sofia.velocityX=0;
    sofia.velocityY=-4;
}
if (keyDown("DOWN_ARROW")) {
  
    sofia.velocityX=0;
    sofia.velocityY=4;
}
if (keyDown("LEFT_ARROW")) {
  
    sofia.velocityX=-7;
    sofia.velocityY=0;
}
if (keyDown("RIGHT_ARROW")) {
  
    sofia.velocityX=7;
    sofia.velocityY=0;
}

createEdgeSprites();
sofia.bounceOff(edges);

sofia.bounceOff(cardboard1);
sofia.bounceOff(cardboard2);
sofia.bounceOff(cardboard3);
sofia.bounceOff(cardboard4);
sofia.bounceOff(cardboard5);
sofia.bounceOff(cardboard6);
sofia.bounceOff(cardboard7);
sofia.bounceOff(cardboard8);
sofia.bounceOff(cardboard9);
sofia.bounceOff(cardboard10);
sofia.bounceOff(cardboard11);
sofia.bounceOff(cardboard12);
sofia.bounceOff(cardboard13);
sofia.bounceOff(cardboard14);
sofia.bounceOff(cardboard15);
sofia.bounceOff(cardboard16);
sofia.bounceOff(cardboard17);
sofia.bounceOff(cardboard18);
sofia.bounceOff(cardboard19);
sofia.bounceOff(cardboard20);
sofia.bounceOff(cardboard21);
sofia.bounceOff(cardboard22);

if ( sofia.collide(cup)){
  textSize(25);
  fill("yellow");
  text("You Win", 150, 180);
  
}

  drawSprites();



}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
