const { randomHentai } = require('../../lib/hentai/random');
const { searchHentai } = require('../../lib/hentai/search');
const { doujin } = require('../../lib/hentai/doujin');
const { isUrl } = require('../../lib/functions');

module.exports.random = () => {
  return new Promise((resolve, reject) => {
    randomHentai()
    .then(data => {
      if (data.result.title == undefined) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.search = (search) => {
  return new Promise((resolve, reject) => {
    if (!search) return reject(new Error(`params search is missing!`));
    if (isUrl(search)) return reject(new Error(`This params is not link!`));
    searchHentai(search)
    .then(data => {
      if (data.result.length < 1) {
        resolve({
          result: `result not found!`
        });
      } else {
        resolve(data);
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports.doujindesu = async (search) => {
  return new Promise((resolve, reject) => {
    if (!search) throw new Error(`search parameters cannot be empty`);
    if (isUrl(search)) throw new Error(`not a link`);
    doujin(search)
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
