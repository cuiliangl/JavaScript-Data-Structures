// 双端队列：两端都可以增删

class Deque {
  #items = []
  addFront(item) {
    return this.#items.unshift(item)
  }

  removeFront() {
    return this.#items.shift()
  }

  addRear(item) {
    return this.#items.push(item)
  }

  removeRear() {
    return this.#items.pop()
  }

  isEmpty() {
    return this.#items.length === 0
  }
}

module.exports = Deque
