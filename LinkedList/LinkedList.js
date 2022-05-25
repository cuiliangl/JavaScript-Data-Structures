// 普通链表
const LinkedList = (function () {
  class Node {
    constructor(element) {
      this.element = element
      this.next = null
    }
  }

  let head = null
  let length = 0

  class LinkedList {
    getHead() {
      return head
    }

    size() {
      return length
    }

    isEmpty() {
      return length === 0
    }

    append(element) {
      const node = new Node(element)

      if (!head) {
        head = node
      } else {
        let current = head

        while (current.next) {
          current = current.next
        }

        current.next = node
      }

      return ++length
    }

    removeAt(position) {
      // 移除第一个元素
      if (position > -1 && position < length) {
        let current = head
        let previous = null
        let index = 0

        if (position === 0) {
          head = current.next
        } else {
          while (index++ < position) {
            previous = current
            current = current.next
          }

          previous.next = current.next
        }

        length--

        return current.element
      }

      return null
    }

    remove(element) {
      return this.removeAt(this.indexOf(element))
    }

    insert(position, element) {
      const node = new Node(element)

      if (position > -1 && position <= length) {
        let current = head
        let previous = null
        let index = 0

        if (position === 0) {
          head = node
          node.next = current
        } else {
          while (index++ < position) {
            previous = current
            current = current.next
          }

          previous.next = node
          node.next = current
        }

        length++

        return true
      }

      return false
    }

    toString() {
      let current = head
      let str = ''

      while (current) {
        str += `${current.element} + ${current.next ? '-->' : ''}`
        current = current.next
      }

      return str
    }

    indexOf(element) {
      let current = head
      let index = -1

      while (current) {
        if (current.element === element) {
          return ++index
        }

        current = current.next
      }

      return index
    }
  }

  return LinkedList
})()

// const linkedlist = new LinkedList()

// console.log(linkedlist)

// linkedlist.append(0)
// linkedlist.append(1)
// linkedlist.append(2)
// linkedlist.append(3)

// linkedlist.removeAt(0)
// linkedlist.removeAt(2)

// console.log(linkedlist.getHead())

module.exports = LinkedList
