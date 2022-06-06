/**
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
    有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。

    示例 1：
    输入：s = "()"
    输出：true
    示例 2：

    输入：s = "()[]{}"
    输出：true
    示例 3：

    输入：s = "(]"
    输出：false
    示例 4：

    输入：s = "([)]"
    输出：false
    示例 5：

    输入：s = "{[]}"
    输出：true
 */

function isValid(str) {
  const len = str.length

  if (len % 2 === 1) return false

  const left = '([{'
  const right = ')]}'
  const hash = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const arr = []
  let i = 0

  while (i < len) {
    const temp = str[i++]
    const val = arr[arr.length - 1]

    if (left.includes(temp)) {
      arr.push(temp)
    } else if (right.includes(temp)) {
      if (arr.length === 0 || val !== hash[temp]) {
        return false
      }
      arr.pop()
    }
  }

  return arr.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('{[]}'))
console.log(isValid('(])'))
