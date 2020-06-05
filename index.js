var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

createFeed = () => {
    let feed = [{
        name: 'brian1',
        comment: 'comment1',
        date: new Date('2020-03-20')
    },{
        name: 'brian2',
        comment: 'comment2',
        date: new Date('2019-04-21')
    },{
        name: 'brian3',
        comment: 'comment3',
        date: new Date('2020-03-19')
    }];
    return feed;
}

app.get('/feed', function (req, res, next) {
    res.json(createFeed())
})

app.get('/hero', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins'})
})

app.listen(8080, function() {
    console.log('CORS-enabled web server listening on port 8080')
})