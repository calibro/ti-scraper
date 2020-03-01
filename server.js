var express = require('express')
var serveStatic = require('serve-static')
const path = require('path');
const fs = require('fs');
const TIScraper = require('./scripts/ti-scraper');

var app = express()
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(serveStatic('client/dist/', { 'index': ['index.html', 'index.htm'] }))
app.use("/data", express.static(__dirname + "/data"));

app.get('/api/data', function(req,res) {
  const directoryPath = path.join(__dirname, 'data');
  let file_resp = []
  let files = fs.readdirSync(directoryPath);
  files.forEach(function (file) {
      if(path.extname(file) == '.csv') {
        let stat = fs.statSync(directoryPath + '/' + file)
        file_resp.push({
          filename: file,
          created: stat.ctime,
          size: stat.size,
          time: stat.mtime.getTime()
        })
      }
  });
  return res.send({
    list: file_resp.sort((a,b) => b.time - a.time)
  })
})

app.post('/api/scrape', function(req,res) {
  var query = req.body.query;
  console.log('start scraping with query ', query);
  TIScraper.scrape(query)
  return res.send({'running': true});
})

app.get('/api/scrape/status', function(req,res) {
  return res.send({'running': TIScraper.isRunning() });
})

app.get('/api/scrape/reset', function(req,res) {
  TIScraper.reset();
  return res.send({'running': false });
})

app.listen(port)
console.log('App running at port ' + port)
