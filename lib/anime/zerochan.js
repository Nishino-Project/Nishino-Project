const axios = require("axios")
const cheerio = require("cheerio")

module.exports.zerochan = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const a = await axios.get('https://www.zerochan.net/search?q=' + query)
            const $ = cheerio.load(a.data)
            const meki = []
            $('#thumbs2 > li > p > a').each(function(a, b) {
                const href = $(b).attr('href')
                const fullUrl = $(b).siblings('a').find('img').attr('src').replace(/\/\d+\//, '/').replace('.jpg', '.full')
                meki.push({
                    href: href,
                    fullUrl: fullUrl
                })
            })
            if (meki.length > 0) {
                resolve(meki)
            } else {
                resolve({
                    creator: 'wira',
                    status: false
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
