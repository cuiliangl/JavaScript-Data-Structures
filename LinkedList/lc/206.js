// 反转数组
const arr = [1, 2, 3, 4, 5]
var reverseArr = function (head) {
  const len = head.length
  const mid = (len - 1) / 2
  let i = 0
  let temp

  while (i < mid) {
    temp = head[i]
    head[i] = head[len - 1 - i]
    head[len - 1 - i] = temp
    i++
  }
  return head
}

console.log(reverseArr(arr))
console.log(reverseArr([1, 2]))

/**
 * 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 思路：改变链表上每个节点的方向
 */
const LinkedList = require('../LinkedList')

const linkedlist = new LinkedList()

linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4)
linkedlist.append(5)

function reverseList(head) {
  let current = head
  let previous = null

  while (current) {
    let next = current.next
    current.next = previous
    previous = current
    current = next
  }

  return previous
}

console.log(linkedlist.getHead())

console.log(reverseList(linkedlist.getHead()))
