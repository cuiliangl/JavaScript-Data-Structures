// 判断是否是质数
// 质数：只能被1 和 自身整除的数。所以只要是1 到 n 之间可以被别的数整除，则不是质数。
function isPrime(num) {
  for (let i = 2; i < num - 1; i++) {
    if (num % i === 0) return false
  }

  return true
}

// 更高效的判断方式
// 一个数因数分解之后的两个数，一定是其中一个小于等于该数的平方根，另一个大于等于该数的平方根
function isPrimePlus(num) {
  const temp = parseInt(Math.sqrt(num))

  for (let i = 2; i <= temp; i++) {
    if (temp % i === 0) return false
  }

  return true
}
