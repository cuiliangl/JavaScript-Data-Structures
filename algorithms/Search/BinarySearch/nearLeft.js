// 在有序数组中找>=某个数最左的位置，存在返回索引，反之返回-1
/**
 * 比如： [1, 2, 2, 3, 3, 4, 4, 5, 6, 7]
 * 1 ~ 0
 * 2 ~ 1
 * 5 ~ 7
 * 9 ~ -1
 */
function nearLeft(arr, target) {
  if (arr == null || arr.length === 0) return -1

  let l = 0
  let r = arr.length - 1
  let ans = -1

  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    const val = arr[mid]

    if (target <= val) {
      ans = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return ans
}

const arr1 = [1, 2, 2, 3, 4, 4, 4, 5, 6]

console.log(nearLeft(arr1, 2)) // 1
console.log(nearLeft(arr1, 1)) // 0
console.log(nearLeft(arr1, 4)) // 4
console.log(nearLeft(arr1, 5)) // 7
console.log(nearLeft(arr1, 9)) // -1
