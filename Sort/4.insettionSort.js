const arr = [2, 4, 5, 1, 7, 3]

// 插入排序
// 思路： 假设第一项排好了，接着和第二项比较，第二项是原地不动还是排到第一项的位置？
// 复杂度： O(n^2)
// 小型数组，该算法比冒泡和选择排序性能好
function insertionSort(arr) {
  let len = arr.length

  for (let i = 1; i < len; i++) {
    let j = i
    // temp 保存临时变量，以便将其插入到正确的位置
    const temp = arr[j]

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }

    arr[j] = temp
  }

  return arr
}

console.log(insertionSort(arr))
