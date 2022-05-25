const Set = require('./Set')

// 子集

function subSet(set, otherSet) {
  if (set.size() > otherSet.size()) return false

  const setValues = set.values()

  for (let i = 0; i < setValues.length; i++) {
    const val = setValues[i]

    if (!otherSet.has(val)) return false
  }

  return true
}

const set = new Set([1, 2, 3])
const otherSet = new Set([1, 2, 2, 4, 5])

console.log(subSet(set, otherSet))
