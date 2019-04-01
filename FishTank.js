background(34, 182, 227);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
var ppXPos=50;
var ppYPos=50;
var ppW=50;
var ppH=50;

var drawFish = function(centerX,centerY,bodyLength,bodyHeight,bodyColor,tailWidth,tailHeight) {
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
  
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
drawFish(334,38,118,32,color(160, 185, 186),21,28);
drawFish(136,186,118,74,color(227, 48, 60),45,36);
drawFish(285,258,118,74,color(82, 191, 74),21,57);
drawFish(304,160,76,57,color(222, 168, 255),57,27);
drawFish(346,332,118,74,color(232, 151, 21),45,36);
drawFish(96,51,89,84,color(207, 235, 82),12,12);
drawFish(212,100,39,74,color(252, 60, 118),14,61);
drawFish(98,260,57,74,color(111, 96, 120),24,49);
drawFish(44,333,50,34,color(131, 94, 153),11,35);
var drawPebbles = function (ppXPos,ppYPos,ppW,ppH) {
    fill(209, 222, 220);
    ellipse (ppXPos,ppYPos,ppW,ppH);
};
drawPebbles(51,379,73,36);
drawPebbles(97,382,34,39);
drawPebbles(126,385,24,35);
drawPebbles(162,392,50,17);
drawPebbles(216,384,51,34);
drawPebbles(257,392,36,17);
drawPebbles(302,386,50,26);
drawPebbles(385,386,50,26);
drawPebbles(343,386,50,26);
drawPebbles(9,393,50,17);



         
         
