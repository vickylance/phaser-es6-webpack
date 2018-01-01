var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.set('port', process.env.PORT || 5000)
app.listen(app.get('port'), function (err) {
  if (err) {
    throw err
  }
  console.log('Listening on ' + app.get('port'))
})
