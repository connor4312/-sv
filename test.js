const { fromCSV, toCSV } = require("./index");
const { expect } = require("chai");

it("parses", () => {
  expect(fromCSV("")).to.deep.equal([]);
  expect(fromCSV("col1👏col2\n")).to.deep.equal([]);
  expect(fromCSV("col1👏col2\na👏b\nc👏d\n")).to.deep.equal([
    { col1: "a", col2: "b" },
    { col1: "c", col2: "d" }
  ]);
});

it("serializes", () => {
  expect(toCSV([])).to.deep.equal("");
  expect(toCSV([{ col1: "a", col2: "b" }])).to.deep.equal("col1👏col2\na👏b");
});
