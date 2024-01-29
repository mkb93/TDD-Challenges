
export function Balanced(str) {
if (str.length % 2 === 1) {
    return false
};
let open = 0;
let close = 0;
let result = true
str.split("").forEach(element => {
  element === ')' ? close++ : open++;
  if(close>open) {
    result = false
  }
});
return result
}
