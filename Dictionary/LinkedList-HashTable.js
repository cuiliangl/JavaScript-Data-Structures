const LinkedList = require('../LinkedList/LinkedList')
const ValuePair = require('./ValuePair')
const loseloseHashCode = require('./loseloseHashCode')

// 分离链接
class LinkedListHashTable {
  #table = []

  // 方便调试
  getTable() {
    return this.#table
  }

  put(key, value) {
    const table = this.#table
    const position = loseloseHashCode(key)

    if (table[position] === undefined) {
      table[position] = new LinkedList()
    }

    this.#table[position].append(new ValuePair(key, value))
  }

  get(key) {
    const position = loseloseHashCode(key)
    const linkedlist = this.#table[position]

    if (linkedlist !== undefined) {
      let current = linkedlist.getHead()

      while (current) {
        if (current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
    }

    return
  }

  remove(key) {
    const position = loseloseHashCode(key)
    const linkedlist = this.#table[position]

    if (linkedlist !== undefined) {
      let current = linkedlist.getHead()
      let index = 0

      while (current) {
        if (current.element.key === key) {
          linkedlist.removeAt(index)
          return true
        }
        index++
        current = current.next
      }
    }

    return false
  }
}

const linkedlistHashTable = new LinkedListHashTable()

linkedlistHashTable.put('str', 1111)
linkedlistHashTable.put('tsr', 2222)

console.log(linkedlistHashTable.getTable())
console.log(linkedlistHashTable.get('tsr'))

linkedlistHashTable.put('rst', 3333)

console.log(linkedlistHashTable.get('rst'))

console.log(linkedlistHashTable.getTable()[12].size())
console.log(linkedlistHashTable.remove('tsr'))
console.log(linkedlistHashTable.getTable()[12].size())
console.log(linkedlistHashTable.get('tsr'))
