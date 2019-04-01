   var x = 87;
   var a =425;
   var e=440;
   var benefits = "SOME INCREDIBLE BENEFITS OF THIS STUNNING MOUSE";
draw = function() {
    background(16, 28, 11);
    fill(43, 97, 29);
  
textSize(32);
text("RAZER BASILIK MOUSE!!", 10, 30);
textSize(14);
fill(35, 110, 20);
text(benefits +':' , 3, x);
textSize(15);
fill(140, 126, 53);
text("CUSTOMIZABLE SCROLL WHEEL RESISTANCE", 36, x+45);

text("TRUE 16,000 DPI 5G OPTICAL SENSOR", 58, x+86);
text("REMOVABLE DPI CLUTCH", 97, x+127);
text("FAST. ACCURATE. DEADLY", 95, x+168);
fill(0, 0, 0);
ellipse(mouseX,mouseY,5,5);
text('your mouse is here',mouseX,mouseY);
image(getImage("avatars/leafers-tree"),e,259,40,40);
image(getImage("avatars/leafers-tree"),e,296,40,40);
image(getImage("avatars/leafers-tree"),e,339,40,40);
e=e-8;
textSize(23);
fill(255, 0, 0);
text('LIMITED EDITION. BUY IT NOW'+'!',35,a);
a=a-0.5;
};
