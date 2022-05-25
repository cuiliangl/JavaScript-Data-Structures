const Set = (function () {
  class Set {
    constructor(intial = []) {
      this.items = intial.reduce((pre, cur) => {
        pre[cur] = cur
        return pre
      }, {})
    }

    has(val) {
      // return val in items
      return this.items.hasOwnProperty(val)
    }

    add(val) {
      if (this.has(val)) return false
      this.items[val] = val
      return true
    }

    remove(val) {
      if (this.has(val)) {
        delete this.items[val]
      }
      return false
    }

    clear() {
      return (this.items = {})
    }

    size() {
      return Object.keys(this.items).length
    }

    values() {
      return Object.values(this.items)
    }

    keys() {
      return Object.keys(this.items)
    }
  }

  return Set
})()

module.exports = Set

// const set = new Set([1, 2])

// set.add(3)
// set.remove(2)

// console.log(set.values())
// console.log(set.size())
