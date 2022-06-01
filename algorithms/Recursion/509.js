// 斐波那契数列
// 0 -- 0
// 1 -- 1
// 2 -- 2
// 3 -- 3
// n (n > 2) 是 (n - 1) ➕ (n - 2)

// 递归方式：动态规划
// 时间复杂度   O(2^n)
// 空间复杂度   O(1)
function fibonacci(num) {
  if (num < 2) return num

  return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(6))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(0))

/**
 * 
 循环方式
 时间复杂度   O(n)
 空间复杂度   O(1)
 */
function fibonacci1(num) {
  if (num < 2) return num

  let pre = 1
  let prePre = 0
  let total = 0

  while (num-- > 1) {
    total = pre + prePre
    prePre = pre
    pre = total
  }

  return total
}

console.log('----')

console.log(fibonacci1(6))
console.log(fibonacci1(1))
console.log(fibonacci1(2))
console.log(fibonacci1(0))
