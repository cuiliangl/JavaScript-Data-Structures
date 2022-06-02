const swap = require('./swap')

const arr = [6, 5, 3, 1, 7, 3]

// 插入排序
// 思路： 假设第一项排好了，接着和第二项比较，第二项是原地不动还是排到第一项的位置？
// 复杂度： O(n^2)
// 小型数组，该算法比冒泡和选择排序性能好
function insertionSort(arr) {
  let len = arr.length

  for (let i = 1; i < len; i++) {
    let j = i
    // temp 保存临时变量，以便将其插入到正确的位置
    const temp = arr[i]

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]

      j--
    }

    arr[j] = temp
  }

  return arr
}

// console.log(insertionSort(arr))

// 优化插入排序
function insertionSort1(arr) {
  if (arr == null || arr.length === 0) return

  for (let i = 1; i < arr.length; i++) {
    for (let pre = i - 1; pre >= 0 && arr[pre] > arr[pre + 1]; pre--) {
      swap(arr, pre, pre + 1)
    }
  }

  return arr
}

console.log(insertionSort1(arr))
