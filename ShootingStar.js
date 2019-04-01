var xPos = -7;
var yPos = -1;
var x1=401;
var x2=382;
var x3=200;
var x4=366;
var x5=321;
var x6=279;
var x7=231;
var x8=231;
var x9=10;
var x10=231;
var x11=231;
var y1=20;
var y2=31;
var y3=-1;
var y4=-9;
var y5=-4;
var y6=-3;
var y7=3;
var y8=3;
var y9=-16;
var y10=3;
var y11=3;

var Shape = 10;

   

draw = function() {
    background(3, 8, 38);
  
 
    
    image(getImage("space/background"),0,0,400,401);
    
       ellipse(xPos, yPos, Shape, Shape);
    xPos +=3;
    yPos +=6;
   
    ellipse(x1,y1,Shape,Shape);
    x1 -=3;
    
    y1 +=7;
    ellipse(x2,y2,Shape,Shape);
    x2 -=3;
    y2 +=4;
    ellipse(x3,y3,Shape,Shape);
    x3 -=3;
    y3 +=5;
    ellipse(x4,y4,Shape,Shape);
    x4 -=3;
    y4 +=3;
    ellipse(x5,y5,Shape,Shape);
    x5 -=3;
    y5 +=2.5;
    ellipse(x6,y6,Shape,Shape);
    x6 -=3;
    y6 +=8;
    ellipse(x7,y7,Shape,Shape);
    x7 -=3;
    y7 +=6;
    Shape *=0.99;
    image(getImage("space/star"),x8,y8,20,20);
    x8--;
    y8++;
    
    image(getImage("space/star"),x9,y9,20,20);
    x9++;
    y9++;
    image(getImage("space/star"),x10,y10,20,20);
    x10+=2;
    y10+=0.5;
    image(getImage("space/star"),x11,y11,20,20);
    x11+=0.5;
    y11+=2;
};
