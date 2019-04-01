background(219, 255, 255);


fill(174, 180, 214);
triangle(196, 8, 350, 130, 50, 130);

fill(255, 255, 255);
rect(60, 130, 280, 207);


// bush
for (var yb=112;yb<336 ;yb+=41) {
   for (var xb=11; xb < 377;xb+=333) {
 fill(yb%10, 284, 10);
image(getImage("cute/GrassBlock"),xb,yb, 45, 55);
}}
for (var xb1=11;xb1<305;xb1+=47.6) {
    image(getImage("cute/GrassBlock"),xb1,318, 45, 55);
    
}
for(var br=62;br<321;br+=39) {
    for(var ybr=101;ybr<295;ybr+=12) {
    image(getImage("cute/DoorTallOpen"),br,ybr, 45, 55); }}
    // windows
for ( var y= 139;y <300;y+=100 ) {
for (var x=117; x<263;x+=119) {
    rect(x,y,45,45);
}}

fill(120, 80, 19);
rect(179, 258, 40, 77);
var w=140;
var l=139;

line (w,l+45,w,l);
line (w,l+145,w,l+100);
line (w+119,l+45,w+119,l);
line (w+119,l+145,w+119,l+100);


