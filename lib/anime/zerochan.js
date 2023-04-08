const axios = require("axios")
const cheerio = require("cheerio")

exports.zerochan = async (query) => {
  try {
    const { data } = await axios.get(`https://www.zerochan.net/search?q=${query}`);
    const $ = cheerio.load(data);
    const result = $('#thumbs2 > li > a').map(function() {
      const img = $(this).find('img');
      if (img.attr('alt').indexOf('https://static.zerochan.net/') !== 0) {
        const title = img.attr('alt').replace(/\ /g, '.');
        const id = $(this).attr('href').split('/')[1];
        return `https://s1.zerochan.net/${title}.600.${id}.jpg`;
      }
    }).get();
    return result
  } catch (error) {
    throw error;
  }
};
