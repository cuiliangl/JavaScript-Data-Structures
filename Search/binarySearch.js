const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// 二分查找
// O(logN)
// 循环方式
function search(arr, target) {
  let head = 0
  let tail = arr.length - 1

  while (head <= tail) {
    const mid = Math.floor((head + tail) / 2)
    const val = arr[mid]

    if (val > target) {
      tail = mid - 1
    } else if (arr[mid] < target) {
      head = mid + 1
    } else {
      return val
    }
  }

  return -1
}

console.log(search(arr, 3))
console.log(search(arr, 5))

// 递归解法
function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) return false

  const mid = Math.floor((start + end) / 2)
  const val = arr[mid]

  if (val > target) {
    return binarySearch(arr, target, start, mid - 1)
  } else if (val < target) {
    return binarySearch(arr, target, mid + 1, end)
  } else {
    return val
  }
}
console.log(binarySearch(arr, 5))
