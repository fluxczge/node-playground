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

http.createServer(function (req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/season') {
        res.write(createSeason());
    } else if (req.url === '/hero') {
        res.write(createHero());
    }
    res.end();
}).listen(8080);