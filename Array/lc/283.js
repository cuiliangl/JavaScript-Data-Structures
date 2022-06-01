// 移除0
// 将 数组中的 0 移动数组的后边，在原数组上修改

function removeZero(nums) {
  let index = 0

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]

    if (val !== 0) {
      nums[index++] = val
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0
  }

  return nums
}

console.log(removeZero([0, 1, 0, 3, 12]))
