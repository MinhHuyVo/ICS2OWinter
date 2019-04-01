  var yPos=400; // y position of answers
var answer = ceil(random(0, 5));
  draw = function() {
        background(255, 255, 255);
        fill(0, 0, 0);
        ellipse(200, 200, 375, 375);
        fill(60, 0, 255);
        triangle(200, 104, 344, 280, 63, 280);
        fill(255, 255, 255);
        if (answer === 1) {
    text("Who I love the most?", 146, 246);
    fill(152, 240, 153);
    text("My older sister and my current girlfriend.", 105, yPos);}
else 
if (answer === 2) {
    text("What is my favourite food?", 133, 244);
    fill(152, 240, 153);
    text("Vietnamese Noodle Soup.", 136, yPos);}
    else 
if (answer === 3) {
    text("What is my future job?", 143, 249);
    fill(152, 240, 153);
    text("Computer Scientist.", 150, yPos);}
    else 
if (answer === 4) {
    text("What do I want to have?", 137, 246);
    fill(152, 240, 153);
    text("A lot of money.", 161, yPos);}
    else 
if (answer === 5) {
    text("Am I introverted or extroverted?", 118, 244);
    fill(152, 240, 153);
    text("Introverted.", 172, yPos);}
    yPos=yPos-5;
    if (yPos <=270) {yPos=270;}
    };


  
    
    
