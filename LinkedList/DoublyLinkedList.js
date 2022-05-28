// 双向链表
const DoublyLinkedList = (function () {
  class Node {
    constructor(element) {
      this.element = element
      this.prev = null
      this.next = null
    }
  }

  class DoublyLinkedList {
    #head = null
    #tail = null
    #length = 0
    size() {
      return this.#length
    }

    isEmpty() {
      return this.#length === 0
    }

    getHead() {
      return this.#head
    }

    getTail() {
      return this.#tail
    }

    append(element) {
      const node = new Node(element)

      if (this.#length === 0) {
        this.#head = node
        this.#tail = node
      } else {
        this.#tail.next = node
        node.prev = this.#tail
        this.#tail = node
      }

      return ++this.#length
    }

    insert(position, element) {
      if (position > -1 && position <= this.#length) {
        const node = new Node(element)
        let current = this.#head
        let index = 0

        if (position === 0) {
          if (!this.#head) {
            this.#head = node
            this.#tail = node
          } else {
            node.next = current
            current.prev = node
            this.#head = node
          }
        } else if (position === this.#length) {
          this.#tail.next = node
          node.prev = this.#tail
          this.#tail = node
        } else {
          while (index++ < position) {
            current = current.next
          }

          node.next = current
          node.prev = current.prev
          current.prev.next = node
          current.prev = node
        }

        this.#length++
        return true
      }

      return false
    }

    indexOf(element) {
      let current = this.#head
      let index = -1

      while (current) {
        index++
        if (current.element === element) {
          return index
        } else {
          current = current.next
        }
      }

      return index
    }

    removeAt(position) {
      // 至少有一个
      if (position > -1 && position < this.#length) {
        let current = this.#head
        let index = 0

        if (position === 0) {
          this.#head = current.next
          if (this.#length === 1) {
            this.#tail = null
          } else {
            this.#head.prev = null
          }
        } else if (position === this.#length - 1) {
          this.#tail = this.#tail.prev
          this.#tail.next = null
        } else {
          while (index++ < position) {
            current = current.next
          }

          current.prev.next = current.next
          current.next.prev = current.prev
        }

        this.#length--
        return current.element
      }

      return false
    }
  }

  return DoublyLinkedList
})()
