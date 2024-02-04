const { vertMirror, horMirror, oper } = require("./squared-strings.js");

describe("are the strings reversed with the vertMirror function", () => {
  test("'asda' returns 'adsa'", () => {
    expect(oper(vertMirror, "asda")).toBe("adsa");
  });
  test("expect 'forget' to be reversed", () => {
    expect(oper(vertMirror, "forget")).toBe("tegrof");
  });
  test("expect all the individual strings seperated by \n to be reversed", () => {
    expect(oper(vertMirror, "forget\ntable")).toBe("tegrof\nelbat");
  });
  test("expect all the individual strings seperated by \n to be reversed", () => {
    expect(oper(vertMirror, "forget\n\ntable")).toBe("tegrof\n\nelbat");
  });
  test("expect an empty string to return an empty string", () => {
    expect(oper(vertMirror, "")).toBe("");
  });
});
describe("is the horMirror function reveresing the position of the strings in the larger string", () => {
  test("'asda' returns 'asda'", () => {
    expect(oper(horMirror, "asda")).toBe("asda");
  });

  test("expect two strings to switch order", () => {
    expect(oper(horMirror, "forget\ntable")).toBe("table\nforget");
  });
  test("expect empty string to return empty string", () => {
    expect(oper(horMirror, "")).toBe("");
  });

  test("expect  up to 100  strings to switch order by checking if first string changes to second string", () => {
    const randomNum = Math.floor(Math.random() * 101);
    const testString1 = "food";
    const testString2 = "old";
    const array1 = Array(randomNum).fill(testString1);
    const array2 = Array(randomNum).fill(testString2);
    const testString = array1.concat(array2).join("\n");

    const letter1 = "o";
    expect(oper(horMirror, testString)[0]).toBe("o");
    expect(oper(horMirror, testString)[1]).toBe("l");
    expect(oper(horMirror, testString)[2]).toBe("d");
  });
});
