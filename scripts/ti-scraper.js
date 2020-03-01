const axios = require('axios');
const Papa = require('papaparse')
const fs = require('fs');

const base_url = 'https://talosintelligence.com/sb_api/query_lookup?query=%2Fapi%2Fv2%2Frelated_ips%2Fdomain%2F&order=ip%20asc';
const limit = 1000

let running = false

async function scrape(query) {
  let offset = 0
  let data = []

  running = true
  while (offset < limit) {
    try {
      let resp = await axios({
        url: base_url + '&query_entry=' + query + '&&offset=' + offset,
        headers: {'Referer': 'https://talosintelligence.com/reputation_center/lookup?search=' + query}
        })
      if (resp.data) {
        console.log('loaded:' + offset)
        data = data.concat(resp.data.ips)
      } else {
        console.log('ERROR:' + resp)
      }
    } catch (error) {
      console.log(Object.keys(error), error.message);
    }
    offset += 50
  }
  //console.log(data)
  let csvData = Papa.unparse(data)
  console.log(csvData)

  let now = new Date()
  fs.writeFile(__dirname + '/../data/' + query + '-' + now.toISOString() + ".csv", csvData, function(err) {
    if(err) {
        return console.log(err);
    }
    running = false
    console.log("The file was saved!");
  });
}

function isRunning () {
  return running
}

function reset () {
  running = false
}

module.exports = {
  scrape,
  isRunning,
  reset
};

//scrape()

