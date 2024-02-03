function vertMirror(str) {
  const strArray = str.split("\n");
  const answer = [];
  strArray.forEach((string) => {
    let letterArray = [];
    string.split("").forEach((letter) => {
      letterArray.unshift(letter);
    });
    let reversedString = letterArray.join("");
    answer.push(reversedString);
  });
  return answer.join("\n");
}
function horMirror(strng) {
  return strng;
}
function oper(func, s) {
  // the plan is to use the first argument func
  // pass the second argument s into func
  // then return the value
  return func(s);
}

vertMirror("abcd\nefgh\nijkl\nmnop");

module.exports = { vertMirror, horMirror, oper };
