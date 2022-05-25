const Set = require('./Set')

// 差集
function difference(set, otherSet) {
  const newSet = new Set()

  const setValues = set.values()

  for (let i = 0; i < setValues.length; i++) {
    const val = setValues[i]

    if (!otherSet.has(val)) {
      newSet.add(val)
    }
  }

  return newSet
}

const set = new Set([1, 2, 3])
const otherSet = new Set([2, 3, 4, 5])

console.log(difference(set, otherSet).values())
