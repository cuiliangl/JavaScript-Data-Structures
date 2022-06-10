// 反转链表

const createLinkedList = require('../../utils/createdLinkedList')

const list = createLinkedList([1, 2, 3, 4])

function reverseList(head) {
  let current = head
  let previous = null
  let next = null

  while (current) {
    next = current.next
    current.next = previous
    previous = current
    current = next
  }

  return previous
}

console.log(reverseList(list))
