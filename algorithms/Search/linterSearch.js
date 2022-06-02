const arr = [1, 2, 3, 4, 5, 6]

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (element === target) return element
  }

  return -1
}
