// 更好的散列函数

function jdb2HashCode(key) {
  // 质数
  let hash = 5381

  for (let i = 0; i < key.length; i++) {
    // 33 当作魔力数
    hash = hash * 33 + key.charCodeAt(i)
  }

  // 随机质数取模
  return hash % 1013
}

module.exports = jdb2HashCode
