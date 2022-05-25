// 实现散列函数
// 将key中的每个字母的ASCII值相加，防止值太大，可以对任意数进行一次取模运算以得到一个较小的数
function loseloseHashCode(key) {
  let hash = 0

  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }

  // 为了得到比较小的值，和任意一个数取模
  return hash % 37
}

module.exports = loseloseHashCode
