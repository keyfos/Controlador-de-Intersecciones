const express = require('express')
const app = express()
var path    = require("path");
  var fs = require('fs');
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/imagenes.html'));
});



app.get('/api/data', function (req, res) {
    fs.readFile("texto.txt", 'utf8', function(err, data) {
      if (err) {
        throw err;
      }
      var sensor1 = data.substr(0, data.indexOf('\n'));
      var sensor2 = data.substr(data.indexOf('\n') + 1, data.lenght);
      console.log(sensor1);
      console.log(sensor2);
      var json = {
        "sensor1":sensor1,
        "sensor2":sensor2
      }
      res.json(json);
    });
});



app.listen(3000, function () {
  console.log('Servidor recibiendo solicitudes al puerto 3000!')
});



module.exports = {
  getPrimeraLinea: function() {
    return primeraLinea;
  },

  getsegundaLinea: function() {
    return segundaLinea;
  }
};
