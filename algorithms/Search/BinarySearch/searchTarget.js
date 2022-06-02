// 二分法查找元素

function binarySearch(arr, target) {
  if (arr == null || arr.length === 0) return false

  let l = 0,
    r = arr.length - 1

  while (l <= r) {
    const midIndex = (l + r) >> 1
    const val = arr[midIndex]

    if (val > target) {
      r = midIndex - 1
    } else if (val < target) {
      l = midIndex + 1
    } else if (val === target) {
      return true
    }
  }
  return false
}

const arr = [1, 2, 3, 4, 6, 8, 9]

console.log(binarySearch(arr, 5))
console.log(binarySearch(arr, 4))
