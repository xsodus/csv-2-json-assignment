const csv = require("../src/csvUtil");
const fs = require("fs");

test("convertToJsonObject should convert a csv file to a json object", () => {
  const inputPath = "./resources/testData.csv";
  const expectData = [
    {
      id: "10000",
      name: "Apple",
      phoneNumber: "(+66)783021482"
    },
    { id: "100001", name: "Bee", phoneNumber: "(+66)091039238" }
  ];
  const callback = function(jsonObj) {
    try {
      expect(jsonObj).be(expectData);
      done();
    } catch (error) {
      done(error);
    }
  };
  csv.convertToJsonObject(inputPath, callback);
});

test("convertToJsonFile should convert a csv file to a json file", () => {
  const inputPath = "./resources/testData.csv";
  const outputPath = "./resources/testData.json";
  const expectData = [
    {
      id: "10000",
      name: "Apple",
      phoneNumber: "(+66)783021482"
    },
    { id: "100001", name: "Bee", phoneNumber: "(+66)091039238" }
  ];
  const callback = function(status) {
    try {
      expect(status).be("Success");
      expect(JSON.parse(fs.readFileSync(outputPath))).be(expectData);
      done();
    } catch (error) {
      done(error);
    }
  };
  csv.convertToJsonFile(inputPath, outputPath, callback);
});
