const { vertMirror, horMirror, oper } = require("./squared-strings.js");

test("'asda' returns 'adsa'", () => {
  expect(oper(vertMirror, "asda")).toBe("adsa");
});
