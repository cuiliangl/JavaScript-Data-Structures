// 字典
module.export = Dictionary = (function Dictionary() {
  const weakMap = new WeakMap()

  class Dictionary {
    constructor(intial = []) {
      const items = intial.reduce((pre, [key, val]) => {
        pre[key] = val
        return pre
      }, {})

      weakMap.set(this, items)
    }

    has(key) {
      return weakMap.get(this).hasOwnProperty(key)
    }

    set(key, val) {
      return (weakMap.get(this)[key] = val)
    }

    delete(key) {
      if (this.has(key)) {
        return delete weakMap.get(this)[key]
      }

      return false
    }

    get(key) {
      return weakMap.get(this)[key]
    }

    keys() {
      return Object.keys(weakMap.get(this))
    }

    values() {
      return Object.values(weakMap.get(this))
    }

    size() {
      return this.keys().length
    }

    clear() {
      return weakMap.set(this, {})
    }

    getItems() {
      return weakMap.get(this)
    }
  }

  return Dictionary
})()

const dictionary = new Dictionary()

dictionary.set('name', 'jack')
dictionary.set('age', 23)

console.log(dictionary.size())
console.log(dictionary.has('name'))
console.log(dictionary.has('skill'))
console.log(dictionary.keys())
console.log(dictionary.values())
console.log(dictionary.get('age'))
console.log(dictionary.delete('age'))
console.log(dictionary.get('age'))
console.log(dictionary.getItems())
