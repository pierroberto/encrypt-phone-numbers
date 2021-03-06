const expect = require("expect");
const number = require("..");

describe("Encryption receive the proper arguments", () => {
  const str = "123-456-789";
  const arr = ["123 - 456", "678 - 890", "123-978-346"];
  const pos = 2;
  const symbol = "X";
  it("should return false if one of the three required arguments is not defined", () => {
    expect(number.encryptNumber()).toBe(false);
    expect(number.encryptNumber(str)).toBe(false);
    expect(number.encryptNumber(str, pos)).toBe(false);
  });

  it("should have a position greater or equal than 1", () => {
    expect(number.encryptNumber(str, 0, symbol)).toBe(false);
  });

  it("should return a string", () => {
    expect(typeof number.encryptNumber(str, pos, symbol)).toBe("string");
  });

  it("should have a string or an array as first argument", () => {
    expect(typeof str).toBe("string");
    expect(Array.isArray(arr)).toBe(true);
    expect(typeof pos).toBe("number");
    expect(typeof symbol).toBe("string");
    number.encryptNumber(["123 - 456", "678 - 890", "123-978-346"], 2, "X");
  });
});
