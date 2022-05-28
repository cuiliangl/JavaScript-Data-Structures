// 辅助类
class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.print(key, value)
  }

  print(key, value) {
    console.log(`key: ${key}; value: ${value}`)
  }
}

module.exports = ValuePair
