// 斐波那契数列
// 1 和 2 是 1
// n (n > 2) 是 (n - 1) ➕ n(n - 2)

// 递归方式：动态规划的方式
function fibonacci(num) {
  if (num <= 2) return 1

  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(6))
console.log(fibonacci(1))

function fibonacci1(num) {
  if (num <= 2) return 1

  let pre = 1
  let prePre = 1
  let total = 0

  while (num-- > 2) {
    total = pre + prePre
    prePre = pre
    pre = total
  }

  return total
}

console.log(fibonacci1(6))
console.log(fibonacci1(1))
