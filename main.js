var http = require('http');

createSeason = () => {
    let season = "<ul>";
    season += "<li>spring</li>";
    season += "<li>summer</li>";
    season += "<li>fall</li>";
    season += "<li>winter</li>";
    season += "</ul>"
    return season;
}

createHero = () => {
    let hero = "<ul>";
    hero += "<li>ironman</li>";
    hero += "<li>thor</li>";
    hero += "<li>hulk</li>";
    hero += "<li>batman</li>";
    hero += "</ul>"
    return hero;
}

createFeed = () => {
    let feed = [{
        name: 'brian1',
        comment: 'comment1',
        date: new Date()
    },{
        name: 'brian2',
        comment: 'comment2',
        date: new Date()
    },{
        name: 'brian3',
        comment: 'comment3',
        date: new Date()
    }];
    return feed;
}

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (req.url === '/season') {
        res.write(JSON.stringify(createSeason()));
    } else if (req.url === '/hero') {
        res.write(JSON.stringify(createHero()));
    } else if (req.url === '/feed') {
        res.write(JSON.stringify(createFeed()));
    }
    res.end();
}).listen(8080);