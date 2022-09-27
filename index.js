var fs = require('fs')
var express = require('express')
const cors = require('cors')

var data = fs.readFileSync(__dirname +'/content/peixes.json')
var peixes = JSON.parse(data)

const app = express()

app.listen(3030, () => console.log('started'))
app.use(express.static('public'))
app.use(cors())

app.get('/peixes', alldata)

function alldata(req, res) {
    res.send(peixes)
}

app.get('/peixes/:id/', searchElement);
  
function searchElement(request, response) {
    var id = request.params;
    var id = id['id']

    if(peixes[id]) {
        var reply = peixes[id];         
    }
    else {
        var reply = {
            status:"Not Found"
        }
    }
    response.send(reply);
}
