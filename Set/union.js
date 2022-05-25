const Set = require('./Set')

// 并集
function union(set, otherSet) {
  const newSet = new Set()
  const temp = [...set.values(), ...otherSet.values()]

  for (let i = 0; i < temp.length; i++) {
    const val = temp[i]
    newSet.add(val)
  }

  return newSet
}

const set = new Set([1, 2, 3])
const otherSet = new Set([2, 3, 4, 5])

console.log(union(set, otherSet).values())
