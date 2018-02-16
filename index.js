const encryptNumber = (str, pos, symbol) => {
  if (!str || !pos || !symbol) return false;
  if (pos < 1) return false;
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
