var xPositions = [200,300,350,250,100,150,10,40,70,100,130,260,150,180,80,20,4,61,20,66,11,233,23119,220,333,310,89];
var yPositions = [0,30,89,149,300,250,200,60,90,120,150,180,210,240,270,300,330,50,80,110,140,170,100,40,2,3,7,];

draw = function() {
    background(204, 247, 255);
    if (mouseIsPressed) {
        xPositions.push(mouseX);
        yPositions.push(mouseY);
    }
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
       
        yPositions[i] += 5;
        fill(yPositions[i], yPositions[i] %50, yPositions +30         );
        image(getImage("cute/CharacterBoy"), xPositions[i], yPositions[i], 40, 80);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        if (yPositions[i] >378) {
            yPositions[i]=-30;
        }
    }
    
    
};
