const Queue = (function () {
  const weakMap = new WeakMap()

  class Queue {
    constructor() {
      weakMap.set(this, [])
    }

    enqueue(item) {
      const list = weakMap.get(this)

      return list.push(item)
    }

    dequeue() {
      const list = weakMap.get(this)

      return list.shift()
    }

    front() {
      const list = weakMap.get(this)

      return list[0]
    }

    size() {
      return weakMap.get(this).length
    }

    isEmpty() {
      return weakMap.get(this).length === 0
    }

    // 打印队列元素
    print() {
      return weakMap.get(this).toString('')
    }
  }

  return Queue
})()

const queue = new Queue()

// queue.enqueue('jack')
// queue.enqueue('mike')
// queue.enqueue('rose')

// console.log(queue.front())
// console.log(queue.size())
// console.log(queue.isEmpty())
// console.log(queue.dequeue())
// console.log(queue.front())

module.exports = Queue
