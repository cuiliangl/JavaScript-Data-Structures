// 汉诺塔

const Stack = require('./Stack')

function hanoiTower(n) {
  if (n === 1) return 1
  else {
    return 2 * hanoiTower(n - 1) + 1
  }
}

// console.log(hanoiTower(4))

// Stack 实现
function hanota(stackA, stackB, stackC) {
  const n = stackA.size()

  const move = (n, a, b, c) => {
    if (n === 1) {
      c.push(a.pop())
      return c
    } else {
      console.log(n)
      move(n - 1, a, c, b)
      c.push(a.pop())
      move(n - 1, b, a, c)
    }
  }
  move(n, stackA, stackB, stackC)

  return stackC.size()
}

const stackA = new Stack()
const stackB = new Stack()
const stackC = new Stack()

for (let i = 0; i < 3; i++) {
  stackA.push(i + 1)
}

console.log(hanota(stackA, stackB, stackC))
