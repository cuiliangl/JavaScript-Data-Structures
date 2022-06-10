// 生成随机数组，相等且不相等
// 指定长度和最大值
function randomArr(maxLen, maxVal) {
  let len = parseInt(Math.random() * maxLen)
  const ans = []

  if (len > 0) {
    ans[0] = parseInt(Math.random() * maxVal)

    for (let i = 1; i < len; i++) {
      //   let val = parseInt(Math.random() * maxVal)

      //   while (val === ans[0]) {
      //     val = parseInt(Math.random() * maxVal)
      //   }

      do {
        ans[i] = parseInt(Math.random() * maxVal)
      } while (ans[i] === ans[i - 1])
    }
  }

  return ans
}

console.log(randomArr(5, 6))
