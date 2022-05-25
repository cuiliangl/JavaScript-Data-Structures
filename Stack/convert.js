const Stack = require('./Stack')

// 十进制转二进制
function divideBy2(decNumber) {
  const stack = new Stack()
  let rem = 0
  let binaryString = ''

  while (decNumber > 0) {
    rem = decNumber % 2
    stack.push(rem)
    decNumber = Math.floor(decNumber / 2)
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }

  return binaryString
}

// console.log(divideBy2(10))

/**
 * 十进制转二进制/八进制/十六进制
 * @param {*} decNumber 十进制数
 * @param {*} base 进制的基数
 */
function baseConverter(decNumber, base) {
  const stack = new Stack()
  const digits = '0123456789ABCDEF'
  let rem = 0
  let baseString = ''

  while (decNumber > 0) {
    rem = decNumber % base
    stack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()]
  }

  return baseString
}

// console.log(baseConverter(10, 2))
// console.log(baseConverter(10, 8))
