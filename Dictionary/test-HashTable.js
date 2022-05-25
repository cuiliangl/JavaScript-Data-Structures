const HashTable = require('./HashTable')

const hashTable = new HashTable()

hashTable.put('jack', '111')
hashTable.put('mike', '222')
hashTable.put('rose', '333')

console.log(hashTable.get('jack'))
console.log(hashTable.get('bob'))

hashTable.remove('jack')
console.log(hashTable.get('jack'))
