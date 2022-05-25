const loseloseHashCode = require('./loseloseHashCode')

// HashTable（散列表） 也叫HashMap（映射）
// key-value 形式的一种。值是存储在数组中的，存储的位置是 key 通过 散列函数计算出来的。所以值是散列（分布）在整个数组中的。
class HashTable {
  constructor() {
    this.table = []
  }

  put(key, value) {
    const position = loseloseHashCode(key)
    console.log('key:', key, 'position: ', position, 'value: ', value)
    this.table[position] = value
  }

  get(key) {
    return this.table[loseloseHashCode(key)]
  }

  // HashTable 不像数组一样将元素的位置也移除，只需要给所在位置赋值为 undefined。
  // 因为每个值的位置是根据key通过散列函数计算出来的， 值在 HashTable中是散列分布在整个数组的范围内
  // 所以一旦连同位置删除，其后面的元素的位置全部变化了，通过key去访问时必然不是准确的。
  remove(key) {
    this.table[loseloseHashCode(key)] = undefined
  }
}

module.exports = HashTable
