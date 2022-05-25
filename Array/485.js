// 计算最大的连续1的个数

function maxCount(arr) {
  let count = 0
  let result = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result = Math.max(result, ++count)
    } else {
      count = 0
      result = Math.max(result, count)
    }
  }

  return result
}

const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1]

console.log(maxCount(arr))

function maxCount1(arr) {
  let count = 0
  const result = [count]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result.push(++count)
    } else {
      count = 0
    }
  }

  return Math.max(...result)
}

const arr1 = [1, 1, 0, 1, 1, 1]

console.log(maxCount1(arr1))
console.log(maxCount1([0]))
