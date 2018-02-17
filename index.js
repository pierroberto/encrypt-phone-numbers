const encryptNumber = (str, pos, symbol) => {
  if (!str || !pos || !symbol) return false;
  if (pos < 1) return false;
  if (Array.isArray(str)) {
    if (!str.length) return false;
    return str.map(number => {
      return hideNumbers(number, pos, symbol);
    });
  }
  return hideNumbers(str, pos, symbol);
};

const hideNumbers = (str, pos, symbol) => {
  let res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    if (/\d/.test(str[i]) && pos) {
      res.push(symbol);
      pos--;
    } else res.push(str[i]);
  }
  return res.reverse().join("");
};

module.exports = { encryptNumber };
