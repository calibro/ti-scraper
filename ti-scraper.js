const axios = require('axios');
const Papa = require('papaparse')
const fs = require('fs');

const base_url = 'https://talosintelligence.com/sb_api/query_lookup?query=%2Fapi%2Fv2%2Frelated_ips%2Fdomain%2F&query_entry=fastwebnet.it&order=ip%20asc';
const limit = 1000

let offset = 0

let data = []

async function scrape() {
  while (offset < limit) {
    let resp = await axios({
      url: base_url + '&&offset=' + offset,
      headers: {'Referer': 'https://talosintelligence.com/reputation_center/lookup?search=fastwebnet.it'}
      })
    if (resp.data) {
      console.log('loaded:' + offset)
      data = data.concat(resp.data.ips)
    } else {
      console.log('ERROR:' + resp)
    }
    offset += 50
  }
  //console.log(data)
  let csvData = Papa.unparse(data)
  console.log(csvData)

  fs.writeFile("scrape.csv", csvData, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
}

scrape()

