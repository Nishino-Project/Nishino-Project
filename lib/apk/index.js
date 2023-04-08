const { rexdl } = require('../../lib/apk/rexdl');
const { isUrl } = require('../../lib/functions');

module.exports.rexdl = async (search) => {
  return new Promise((resolve, reject) => {
    if (!search) throw new Error(`search parameters cannot be empty`);
    if (isUrl(search)) throw new Error(`not a link`);
    rexdl(search)
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
