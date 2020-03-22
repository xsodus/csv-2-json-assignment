const csv = require("./csvUtil");

function main() {
  const inputPath = "./resources/customer-data.csv.xls";
  const outputPath = "./resources/customer-data.json";
  csv.convertToJsonFile(inputPath, outputPath);
}

main();
