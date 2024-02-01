function vertMirror(str) {
  console.log(str);
  return "adsa";
}
function horMirror(strng) {
  // the plan is to seperate the larger string into smaller strings by /n
  // reverse the order of the elements in the Array
  // then rejoin it and return it
}
function oper(func, s) {
  // the plan is to use the first argument func
  // pass the second argument s into func
  // then return the value
  return func(s);
}

vertMirror("abcd\nefgh\nijkl\nmnop");

module.exports = { vertMirror, horMirror, oper };
