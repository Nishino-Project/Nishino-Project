const axios = require("axios")
const cheerio = require("cheerio")

module.exports.zerochan = (query) => {
    return new Promise(async (resolve, reject) => {
var i = Math.floor(Math.random() * 3) + 1
             a = await axios.get('https://www.zerochan.net/search?q=' + query)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const meki = []
                      $('#thumbs2 > li > p > a').each(function(a, b) {
                    meki.push($(b).attr('href'))
                })
                
                meki != '' ? resolve(
                       meki
                ) : resolve({
                    creator: 'wira',
                    status: false
                }).catch(reject)
            })
    })
}