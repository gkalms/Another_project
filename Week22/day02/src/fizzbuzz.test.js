const fizzbuzz = require("./fizzbuzz");

describe("test 1 - not multiple of 3 or 5", () => {
  it("results", () => {
    const test = fizzbuzz(7);
    expect(fizzbuzz).toBe(7);
  });
});
