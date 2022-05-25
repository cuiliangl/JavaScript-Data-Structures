// 双向链表
const DoublyLinkedList = (function () {
  class Node {
    constructor(element) {
      this.element = element
      this.prev = null
      this.next = null
    }
  }

  let head = null
  let tail = null
  let length = 0

  class DoublyLinkedList {
    size() {
      return length
    }

    isEmpty() {
      return length === 0
    }

    getHead() {
      return head
    }

    getTail() {
      return tail
    }

    append(element) {
      const node = new Node(element)

      if (length === 0) {
        head = node
        tail = node
      } else {
        tail.next = node
        node.prev = tail
        tail = node
      }

      return ++length
    }

    insert(position, element) {
      if (position > -1 && position <= length) {
        const node = new Node(element)
        let current = head
        let index = 0

        if (position === 0) {
          if (!head) {
            head = node
            tail = node
          } else {
            node.next = current
            current.prev = node
            head = node
          }
        } else if (position === length) {
          tail.next = node
          node.prev = tail
          tail = node
        } else {
          while (index++ < position) {
            current = current.next
          }

          node.next = current
          node.prev = current.prev
          current.prev.next = node
          current.prev = node
        }

        length++
        return true
      }

      return false
    }

    indexOf(element) {
      let current = head
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
      if (position > -1 && position < length) {
        let current = head
        let index = 0

        if (position === 0) {
          head = current.next
          if (length === 1) {
            tail = null
          } else {
            head.prev = null
          }
        } else if (position === length - 1) {
          tail = tail.prev
          tail.next = null
        } else {
          while (index++ < position) {
            current = current.next
          }

          current.prev.next = current.next
          current.next.prev = current.prev
        }

        length--
        return current.element
      }

      return false
    }
  }

  return DoublyLinkedList
})()
