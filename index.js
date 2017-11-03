module.exports = function encryptNumber (str, pos, symbol) {
	let res = []
  for (var i = str.length-1; i >= 0; i--) {
    if ( /\d/.test(str[i]) && pos) {
    res.push(symbol)
    pos--
    } else res.push(str[i])
  }
  return res.reverse().join('')
}
