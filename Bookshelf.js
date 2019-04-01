var books = [
    {
    title: "The Giver",
    author:"-Kayn",
    stars: 4,
    color: color(255, 0, 0)
    },
    {
    title: "The Alchemist",
    author:"-Alistar",
    stars: 5,
    color: color(143, 68, 68)
    },
    {
    title :'The Lover',
    author:"-Amumu",
    stars: 3,
    color: color(60, 32, 138)
    }
];

// draw shelf
for (var shells =0 ;  shells < 3;shells++) {
    fill(173, 117, 33);
    rect(0, shells*113+112, width, 10);
}


for (var a = 0; a < books.length; a++) {
    var mybook=books[a];
    fill(books[a].color);
    rect(a*120+12,20,97,100);
    fill(0, 0, 0);
    if (a===2) {
        text("recommend for my friend",a*120+13,83);
    }
    text(books[a].author, a*120 +59,59);
    text(books[a].title,a*120+20,41);
    for (var i = 0; i < books[a].stars; i++) {
    image(getImage("cute/Star"), a*121+13 + i * 20, 90, 20, 30);
    }
    
}

