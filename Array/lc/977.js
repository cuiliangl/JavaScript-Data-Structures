// 有序数组的平方
// 思路： 双指针碰撞。求平方后数组从左右两边到中间，值是从小到大
function sortedSquares(nums) {
  if (nums == null || nums.length < 2) return

  let i = 0
  let j = nums.length - 1
  let k = nums.length - 1
  const res = []

  while (i <= j) {
    const head = Math.pow(nums[i], 2)
    const tail = Math.pow(nums[j], 2)

    if (head > tail) {
      res[k--] = head
      i++
    } else {
      res[k--] = tail
      j--
    }
  }

  return res
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))
