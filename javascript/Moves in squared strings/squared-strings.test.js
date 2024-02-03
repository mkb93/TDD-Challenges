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
});
describe("is the horMirror function reveresing the position of the strings in the larger string", () => {
  test("'asda' returns 'asda'", () => {
    expect(oper(horMirror, "asda")).toBe("asda");
  });

  test("expect two strings to switch order", () => {
    expect(oper(vertMirror, "forget\ntable")).toBe("table\nforget");
  });
});
