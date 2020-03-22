const csv = require("csvtojson");

function convertFromFile(path, callback) {
  csv()
    .fromFile(path)
    .then(callback);
}

module.exports = {
  convertFromFile
};
