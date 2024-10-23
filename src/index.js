module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsMap = Object.fromEntries(bracketsConfig);
  let sameBrackets = new Set(
    bracketsConfig.filter(([open, close]) => open === close).map(([open]) => open)
  );

  for (let char of str) {
    if (sameBrackets.has(char)) {
      if (stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } 
    else if (bracketsMap[char]) {
      stack.push(char);
    } 
    else {
      if (stack.length === 0 || bracketsMap[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
