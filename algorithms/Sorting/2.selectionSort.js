const swap = require('./swap')

// 选择排序
// 思路：找到数组中的最小值并将其放在第一位，接着找次小值，然后放在第二位，以此类推
// 时间复杂度： O(n^2)
function selectionSort(arr) {
  if (arr == null || arr.length < 2) return

  const len = arr.length

  // 0 到 n - 1 的位置上的最小值放在 0 位置
  // 0 ~ len -1

  // 1 到 n - 1 的位置上的最小值放在 1 位置
  // 1 ~ len -1

  // 2 到 n - 1 的位置上的最小值放在 2 位置
  // 2 ~ len -1
  // ...

  for (let i = 0; i < len - 1; i++) {
    // 假设当前位置的值为最小值，然后和其他值比较，找到真正最小的值的索引
    let indexMin = i

    for (let j = i + 1; j < len; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }

    // 索引变了，说明本次循环有比当前假设的最小值还的值，然后交互位置
    if (i !== indexMin) {
      swap(arr, i, indexMin)
    }
  }

  return arr
}

const arr = [0, -1, 6, 5, 4, 4, 5, 3, 2, 1]

console.log(selectionSort(arr))
