const arr = [3, 5, 6, 7, 1, 9, 2]

// 冒泡排序
// 时间复杂度： O(n^2)
function bubbleSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}
console.log(bubbleSort(arr))

// 冒泡排序每次循环都在找最大的，然后把最大值往后移动
