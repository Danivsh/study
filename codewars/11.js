function basicOp(operation, value1, value2) {
  let res;
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
  }
}
