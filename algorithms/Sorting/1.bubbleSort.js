const swap = require('./swap')

// 冒泡排序：每次循环都在找最大的，然后把最大值往后移动
// 时间复杂度： O(n^2)
function bubbleSort(arr) {
  if (arr == null || arr.length < 2) return

  const len = arr.length

  // 0 ～ len - 1
  // 1 ～ len - 2
  // 2 ～ len - 3
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j + 1, j)
      }
    }
  }

  return arr
}

const arr = [3, 5, 6, 7, 1, 9, 2]

console.log(bubbleSort(arr))
