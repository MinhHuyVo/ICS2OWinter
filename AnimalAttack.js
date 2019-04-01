var bodyX = 143;
var bodyY = 138;
var bodyW =120;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(240, 74, 226);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    fill(219, 121, 232);
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    arc(bodyX,bodyY-200*0.29,29,13,0,180);//smile
   
    triangle(bodyX-1/4*200,bodyY-200*0.515,bodyX-0.09*200,bodyY-200*0.45,bodyX-0.145*200,bodyY-200*0.355); //ears
    triangle(bodyX+200*0.24,bodyY-200*0.515,bodyX+200*0.095,bodyY-200*0.45,bodyX+200*0.15,bodyY-200*0.355);
     fill(0, 0, 0);
    ellipse(bodyX-200*0.065,bodyY-200*0.385,4,8); //eyes
     ellipse(bodyX+200*0.07,bodyY-200*0.385,4,8);
      fill(228, 179, 235);
     ellipse(bodyX,bodyY-200*0.335,23,10); //nose
      ellipse(bodyX-200*0.025,bodyY-200*0.335,6,4);
     ellipse(bodyX+200*0.025,bodyY-200*0.335,6,4);
    quad(bodyX-200*0.225,bodyY-200*0.16,bodyX-200*0.275,bodyY-200*0.11,bodyX-200*0.345,bodyY-200*0.25,bodyX-200*0.33,bodyY-200*0.29); // arms
    quad(bodyX+200*0.225,bodyY-200*0.16,bodyX+200*0.27,bodyY-200*0.11,bodyX+200*0.36,bodyY-200*0.245,bodyX+200*0.34,bodyY-200*0.275);
    rect(bodyX-200*0.11,bodyY+200*0.24,10,35);// legs
    rect(bodyX+200*0.07,bodyY+200*0.24,10,35);
    bodyX=bodyX+1;
    bodyY=bodyY+1;
    bodyW=bodyW+2;
     
     
    
};
