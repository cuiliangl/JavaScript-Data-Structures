const arr = [2, 3, 4, 6, 2, 5, 6, 7, 1]

//
// 快速排序
// 思路：分治思想
// 复杂度： O(NlogN)
function quickSort(arr) {
  if (arr.length <= 1) return arr

  let i = 0
  const base = arr[0]
  const len = arr.length
  const left = []
  const right = []

  while (++i < len) {
    const val = arr[i]

    if (val < base) {
      left.push(val)
    } else {
      right.push(val)
    }
  }

  return [...quickSort(left), base, ...quickSort(right)]
}

console.log(quickSort(arr))
