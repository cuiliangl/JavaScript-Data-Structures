const LinkedList = require('../LinkedList')

// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
var removeElements = function (head, val) {
  let current = head
  let parent = null

  while (current) {
    if (current.element === val) {
      if (current === head) {
        head = null
      } else {
        parent.next = current.next
      }
    }
    parent = current
    current = current.next
  }
  return head
}

const linkedlist = new LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(2)
linkedlist.append(4)

console.log(linkedlist.getHead())
// 删除所有元素为 2的节点
removeElements(linkedlist.getHead(), 2)
console.log(linkedlist.getHead())

// const linklist1 = new LinkedList()
// linklist1.append(1)
// console.log(linklist1.getHead())
// console.log(removeElements(linklist1.getHead(), 1))
