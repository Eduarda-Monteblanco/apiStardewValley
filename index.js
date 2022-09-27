var fs = require('fs')
var express = require('express')
const cors = require('cors')
const request = require('request');

request.get('https://raw.githubusercontent.com/Eduarda-Monteblanco/apiStardewValley/main/peixes.json', function(err, res, body) {
    var data = JSON.parse(res.body, 'utf-8')
    peixes = data['peixes']

    const app = express()

    app.listen(3000, () => console.log('started'))
    app.use(express.static('public'))
    app.use(cors())

    app.get('/peixes', (req, res) => {
        res.send(peixes)
    })

    app.get('/peixes/:id/', (req, res) => {
        var id = req.params;
        var id = id['id']
    
        if(peixes[id]) {
            var reply = peixes[id];         
        }
        else {
            var reply = {
                status:"Not Found"
            }
        }
        res.send(reply);
    });


})
