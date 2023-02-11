module.exports = function check(str, bracketsConfig) {
  let openingBr = [];
  let brDic = {};
  let stack = [];
  let same = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      same.push(bracketsConfig[i][0]);
    }

    openingBr.push(bracketsConfig[i][0]);
    brDic[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    if (openingBr.includes(str[i])) {
      if (same.includes(str[i]) && stack[stack.length - 1] === str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topEl = stack[stack.length - 1];

      if (brDic[str[i]] === topEl) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
