const csv = require("csvtojson");
const fs = require("fs");

function convertToJsonObject(path, callback) {
  csv()
    .fromFile(path)
    .then(callback);
}

function convertToJsonFile(csvPath, destPath, callback) {
  convertToJsonObject(csvPath, function(jsonObject) {
    fs.writeFileSync(destPath, JSON.stringify(jsonObject));
    callback("Success");
  });
}

module.exports = {
  convertToJsonObject,
  convertToJsonFile
};
