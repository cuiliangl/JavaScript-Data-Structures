// 优先级队列

const PriorityQueue = (function () {
  const weakMap = new WeakMap()

  function QueueElement(element, priority) {
    element = element
    priority = priority
  }

  class PriorityQueue {
    constructor() {
      weakMap.set(this, [])
    }

    enqueu = function (element, priority) {
      let added = false

      const queueElement = new QueueElement(element, priority)
      const items = weakMap.get(this)

      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if (!added) {
        items.push(queueElement)
      }
    }

    dequeue = function () {
      const items = weakMap.get(this)

      return items.shift()
    }

    size = function () {
      return weakMap.get(this).length
    }

    front = function () {
      return weakMap.get(this)[0]
    }

    isEmpty = function () {
      return weakMap.get(this).length === 0
    }

    print = function () {
      const items = weakMap.get(this)

      for (let i = 0; i < items.length; i++) {
        const queue = items[i]
        console.log(`${queue.element}---${queue.priority}`)
      }
    }
  }

  return PriorityQueue
})()
