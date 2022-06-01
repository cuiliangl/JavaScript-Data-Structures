// 阶乘相加
// 1! + 2! + 3!...
function jie(n) {
  let res = 0
  let t = 1

  for (let i = 1; i <= n; i++) {
    t = t * i
    res += t
  }

  return res
}

// t = 1 // 1
// res = 1

// t = 2 * 1 // 2
// res = 3

// t = 3 * t // 6
// res = 9

// t = 4 * t // 24
// res = 23

console.log(jie(3))
console.log(jie(4))
console.log(jie(5))
