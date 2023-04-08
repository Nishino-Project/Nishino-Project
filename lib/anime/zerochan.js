const axios = require("axios")
const cheerio = require("cheerio")

module.exports.zerochan = async (query) => {
  try {
    const { data } = await axios.get(`https://www.zerochan.net/search?q=${query}`);
    const $ = cheerio.load(data);
    const meki = $('#thumbs2 > li > p > a').map((_, element) => $(element).attr('href')).get();
    
    if (meki.length > 0) {
      return meki;
    }
    
    return { creator: 'wira', status: false };
  } catch (error) {
    throw error;
  }
};
