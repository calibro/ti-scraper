const axios = require('axios');
const Papa = require('papaparse')
const fs = require('fs');
const parseDomain = require('parse-domain')

const base_url = 'https://talosintelligence.com/sb_api/query_lookup?query=%2Fapi%2Fv2%2Frelated_ips%2Fdomain%2F&order=ip%20asc';
const limit = 1000

let running = false
let offset = 0

async function scrape(query) {
  let data = []

  if (!running) {
    offset = 0
    running = true
    while (offset < limit) {
      try {
        let resp = await axios({
          url: base_url + '&query_entry=' + query + '&&offset=' + offset,
          headers: {'Referer': 'https://talosintelligence.com/reputation_center/lookup?search=' + query}
          })
        if (resp.data) {
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

    data.forEach(el => {
      el.blacklists_count = Object.keys(el.blacklists).length
      el.blacklists_snources = Object.keys(el.blacklists).join(' | ')

      //parse second and third levels domains
      let dom = parseDomain(el.hostname)
      if(dom) {
        el.second_level_domain = dom.domain + '.' + dom.tld
        el.third_level_domain = dom.subdomain.split('.').slice(-1) + '.' + el.second_level_domain
      }
      console.log(dom)

      //add 'category' based on second level domains
      if(query.includes('fastwebnet')) {
        if(el.hostname && el.hostname.includes('fastweb.it')){
          el.category = 'corporate'
        } else if (el.hostname && el.hostname.includes('fastwebnet.it')) {
          el.category = 'consumer'
        } else {
          el.category = 'enterprise'
        }
      }
    })

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
}

function isRunning () {
  return running
}

function currentOffset () {
  return offset
}

function reset () {
  running = false
}

module.exports = {
  scrape,
  isRunning,
  reset,
  currentOffset
};

//scrape()

