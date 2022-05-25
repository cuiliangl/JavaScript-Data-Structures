const Stack = (function () {
  // 保证 list 是私有的
  const weekMap = new WeakMap()

  class Stack {
    constructor() {
      weekMap.set(this, [])
    }

    push(val) {
      return weekMap.get(this).push(val)
    }

    pop() {
      return weekMap.get(this).pop()
    }

    // 返回栈顶元素
    peek() {
      if (this.isEmpty()) return null

      const items = weekMap.get(this)

      return items[items.length - 1]
    }

    isEmpty() {
      return weekMap.get(this).length === 0
    }

    size() {
      return weekMap.get(this).length
    }

    clear() {
      return weekMap.set(this, [])
    }
  }

  return Stack
})()

const stack = new Stack()

stack.push('jack')
stack.push('mike')

// console.log(stack.size())

// stack.pop()

// console.log(stack.peek())

module.exports = Stack
