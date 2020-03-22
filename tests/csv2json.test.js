const csv2json = require("../src/csv2json");

test("Test csv2json convertor", () => {
  const simpleCsvPath = "../resources/testData.csv";
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
  csv2json.convertFromFile(simpleCsvPath, callback);
});
