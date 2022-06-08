// 删除排序数组中的重复项

// 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 元素的 相对顺序 应该保持 一致 。

/**
    方法一：双指针法（慢快指针）
    思路：
    数组完成排序后，我们可以放置两个指针 i 和 j，其中 i 是慢指针，而 j 是快指针。慢指针初始值为 0，快指针初始值为 1.
    如果 arr[i] === arr[j]，跳过，快指针加 1。反之，慢指针加 1，快指针的值赋值给慢指针。
 */
function removeDuplicates(nums) {
  let i = 0
  const len = nums.length

  for (let j = 1; j < len; j++) {
    if (nums[i] !== nums[j]) {
      nums[++i] = nums[j]
    }
  }

  console.log(nums)

  return i + 1
}

const nums = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5]
console.log(removeDuplicates(nums))

/**
 * 
    方法二： 计数排序思想
    思路：

    因为题目是要求返回去重后数组的长度，并不关心去重后的数组，所以找出重复出现的个数即可。

    由于数组是有序排列的，定义一个变量 count = 0; 从位置 1 开始遍历，判断当前元素是否和上一个元素相等，如果相等 count+1，反之跳过。

    最后 count 就是所有重复元素出现的个数。那么不重复元素组成的数组就是 数组长度 - count
 */
function removeDuplicates1(nums) {
  let count = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) count++
  }

  return nums.length - count
}

const nums1 = [1, 1, 2, 2, 2, 3, 3, 4, 4, 5]
console.log(removeDuplicates1(nums1))
