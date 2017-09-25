var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var carOfTheWeek = require('./carOfTheWeek')
var carMakes = require('./makes')
var carModels = require('./models')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept")
  next()
})


var router = express.Router()
router.get('/carOfTheWeek', function (req, res) {
     res.json(carOfTheWeek)
})

router.get('/makes', function (req, res) {
    res.json(carMakes)
})

router.get('/modelsByMake/:makeId', function (req, res) {
    var makeId = parseInt(req.params.makeId)
    var result = carModels.filter(m => m.makeId === makeId)
        .map(m => ({
            id: m.id,
            name: m.name
        }))
    if (result.length === 0) {
        res.status(404).send('not found')
        return
    }
    res.json({ models: result })
})

router.get('/models/:modelId', function (req, res) {
    var modelId = parseInt(req.params.modelId)
    var result = carModels.find(m => m.id === modelId)
    if (!result) {
        res.status(404).send('not found')
        return
    }
    result.makeName = carMakes.find(m=>m.id === result.makeId).name
    res.json({ model: result })
})

app.use('/api',router)


var port = process.env.port || 8000
app.listen(port)
console.log('api server is listen on http://localhost:'+port+'/api')