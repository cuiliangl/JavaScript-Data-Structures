// 在有序数组中找<=target最右的位置，存在返回索引，反正返回-1

/**
 * 比如： [1, 2, 2, 3, 4, 4, 4, 5, 6]
 * 1 ～ 0
 * 2 ～ 2
 * 4 ～ 6
 * 9 ～ -1
 */
function nearRight(arr, target) {
  if (arr == null || arr.length === 0) return -1

  let l = 0
  let r = arr.length - 1
  let ans = -1

  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    const val = arr[mid]

    if (val <= target) {
      if (val === target) {
        ans = mid
      }
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return ans
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6]

console.log(nearRight(arr, 1)) // 0
console.log(nearRight(arr, 2)) // 2
console.log(nearRight(arr, 4)) // 6
console.log(nearRight(arr, 5)) // 7
console.log(nearRight(arr, 9)) // -1
console.log(nearRight(arr, 0)) // -1
