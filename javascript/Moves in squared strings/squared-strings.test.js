const {vertMirror, horMirror, oper} =require('./squared-strings.js')

console.log(oper(vertMirror,'abcd\nefgh\nijkl\nmnop')=== 'dcba\nhgfe\nlkji\nponm')