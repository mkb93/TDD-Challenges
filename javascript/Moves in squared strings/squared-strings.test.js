const { vertMirror, horMirror, oper } = require("./squared-strings.js");

describe("are the strings reversed with the vertMirror function", () => {
  test("'asda' returns 'adsa'", () => {
    expect(oper(vertMirror, "asda")).toBe("adsa");
  });
  test("expect 'forget' to be reversed", () => {
    expect(oper(vertMirror, "forget")).toBe("tegrof");
  });
});
