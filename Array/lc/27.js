/**
 * 
    给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
    不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
    元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */
function removeElement(nums, val) {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    if (nums[j] === val) {
      j--
    } else if (nums[i] === val) {
      nums[i++] = nums[j--]
    } else {
      i++
    }
  }

  return i
}

console.log(removeElement([3, 2, 2, 3, 1], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 0))

// 优化
function removeElement1(nums, val) {
  if (nums == null || nums.length === 0) return 0

  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j--]
    } else {
      // 不相等加1，所以最后数组的长度就是i
      i++
    }
  }

  return i
}

console.log(removeElement1([3, 2, 2, 3, 1], 3))
console.log(removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 0))

// LC 答案：和移除 0 一个原理
function removeElement3(nums, val) {
  let i = 0
  const len = nums.length

  for (let j = 0; j < len; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }

  return i
}
