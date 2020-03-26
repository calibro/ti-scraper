const axios = require('axios');
const Papa = require('papaparse')
const fs = require('fs');
const parseDomain = require('parse-domain')

const base_url = 'https://talosintelligence.com/sb_api/query_lookup?query=%2Fapi%2Fv2%2Frelated_ips%2Fdomain%2F&order=ip%20asc';
const limit = 1000

let running = false
let offset = 0
let message = ''

async function scrape(query) {
  let data = []

  if (!running) {
    offset = 0
    running = true
    message = ''
    while (offset < limit && running) {
      try {
        let resp = await axios({
          url: base_url + '&query_entry=' + query + '&&offset=' + offset,
          headers: {'Referer': 'https://talosintelligence.com/reputation_center/lookup?search=' + query}
          })
        if (resp.data) {
          if (resp.data.count > 0) {
            data = data.concat(resp.data.ips)
          } else {
            running = false
          }
        } else {
          console.log('ERROR:' + resp)
        }
      } catch (error) {
        console.log(Object.keys(error), error.message);
      }
      offset += 50
    }

    if (running && data.length > 0){
      data.forEach(el => {
        el.blacklists_count = Object.keys(el.blacklists).length
        el.blacklists_sources = Object.keys(el.blacklists).join(' | ')
        delete el.blacklists

        //parse second and third levels domains
        let dom = parseDomain(el.hostname)
        if(dom) {
          el.second_level_domain = dom.domain + '.' + dom.tld
          el.third_level_domain = dom.subdomain.split('.').slice(-1) + '.' + el.second_level_domain
        }

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
            message = 'Could not save result file:' + err
            return console.log(err);
        }
        running = false
        console.log("The file was saved!");
      });
    } else {
      message = 'No data for the query "'+ query + '"'
      console.log();
    }
  }
}

function isRunning () {
  return running
}

function getStatusMessage () {
  if (running) {
    return 'Scraping ' + offset +  '/' +limit
  } else {
    return message
  }
}

function currentOffset () {
  return offset
}

function reset () {
  running = false
  message = ''
}

module.exports = {
  scrape,
  isRunning,
  reset,
  currentOffset,
  getStatusMessage
};

//scrape()

