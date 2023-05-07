import { Stack } from "./stack-with-array.js";

function decimalToBinary(decNumber, base) {
  const remstack = new Stack()
  let number = decNumber
  let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let rest
  let baseString = ''

  if (!(base >= 2 && base <= 36)) {
    return 'Base invalid'
  }

  while (number > 0) {
    rest = Math.floor(number % base)
    remstack.push(rest)
    number = Math.floor(number / base)
  }

  while (!remstack.isEmpty()) {
    baseString += digits[remstack.pop()]
  }

  return baseString
}

console.log(decimalToBinary(100345, 2))
console.log(decimalToBinary(100345, 8))
console.log(decimalToBinary(100345, 16))
console.log(decimalToBinary(100345, 35))
