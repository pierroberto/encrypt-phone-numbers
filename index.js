
module.exports = function encryptNumber (str, pos) {
	var res = []
  for (var i = str.length-1; i >= 0; i--) {
    if ( /\d/.test(str[i]) && pos) {
    res.push('X')
    pos--
    } else {
    res.push(str[i])
    }
  }
  return res.reverse().join('')
}

console.log(encryptNumber('+1-541-754-01/0', 4))
// 754-3010 Local
// (541) 754-3010 Domestic
// +1-541-754-3010 International
// 1-541-754-3010 Dialed in the US
