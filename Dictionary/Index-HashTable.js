const loseloseHashCode = require('./loseloseHashCode')
const ValuePair = require('./ValuePair')

class IndexHashTable {
  table = []

  put(key, value) {
    const { table } = this
    let position = loseloseHashCode(key)

    while (table[position] !== undefined) {
      position++
    }

    this.table[position] = new ValuePair(key, value)
  }

  get(key) {
    const { table } = this
    const len = table.length
    let position = loseloseHashCode(key)

    while (
      position < len &&
      (table[position] === undefined || table[position].key !== key)
    ) {
      position++
    }

    if (table[position]?.key === key) {
      return table[position].value
    }
  }

  remove(key) {
    const { table } = this
    const len = table.length
    let position = loseloseHashCode(key)

    while (
      position < len &&
      (table[position] === undefined || table[position].key !== key)
    ) {
      position++
    }

    if (table[position]?.key === key) {
      return (table[position] = undefined)
    }
  }
}

const indexHashtable = new IndexHashTable()

indexHashtable.put('str', 111)
indexHashtable.put('srt', 222)
indexHashtable.put('tsr', 333)

console.log(indexHashtable.get('sret'))

indexHashtable.remove('srt')

console.log(indexHashtable.table, indexHashtable.table.length)
