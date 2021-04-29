
// Key words required by this framework
// Stage 1: Decsribe it
        //  describe('describe what you are testing; or have the function name')
        // what is the function under test
            // Covention: Test Happy path 

// Create a function which adds two numbers
// The same function should return null when no inputs are passed

const addTwoNumbers = require("./lesson1");

describe("addNumbers", () => {
  // basic happy path
  it("returns the sum of two valid numbers provided as input", () => {
    const sum = addTwoNumbers(1, 1);
    expect(sum).toBe(2);
  });

  // 2nd happy path
  it("returns null when no inputs provided", () => {
    const sum = addTwoNumbers();
    expect(sum).toBe(null);
  });

  it("returns null if inputs are not numbers", () => {
    const sum = addTwoNumbers("a", "b");
    expect(sum).toBe(null);
  });
});

