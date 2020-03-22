const csv = require("csvtojson");
const fs = require("fs");

function convertToJsonObject(path, callback) {
  csv()
    .fromFile(path)
    .then(callback);
}

function convertToJsonFile(csvPath, destPath, callback = null) {
  convertToJsonObject(csvPath, function(jsonObject) {
    fs.writeFileSync(destPath, JSON.stringify(jsonObject));
    if (callback !== null) callback("Success");
  });
}

module.exports = {
  convertToJsonObject,
  convertToJsonFile
};
