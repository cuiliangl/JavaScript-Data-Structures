// 交换数组两个位置的值

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

module.exports = swap
