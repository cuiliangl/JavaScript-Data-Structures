// 合并两个有序链表

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const createLinkedList = arr => {
  let i = 0
  let head = null
  let current = null

  while (i < arr.length) {
    const node = new ListNode(arr[i++])

    if (head == null) {
      head = current = node
    } else {
      current.next = node
      current = current.next
    }
  }

  return head
}

// console.log(createLinkedList([1, 2, 3]))

const linkedList1 = createLinkedList([1, 2, 4])
const linkedList2 = createLinkedList([1, 3, 4])
const linkedList3 = createLinkedList([2, 3, 5])

/**
 * 迭代的方式
 * @param {*} l1
 * @param {*} l2
 * @returns
 */
function mergeLinkedList(l1, l2) {
  let head = null
  let current = null

  while (l1 || l2) {
    let node = null

    if (l1 && l2) {
      if (l1.val > l2.val) {
        node = new ListNode(l2.val)
        l2 = l2.next
      } else {
        node = new ListNode(l1.val)
        l1 = l1.next
      }
    } else if (l1) {
      node = new ListNode(l1.val)
      l1 = l1.next
    } else if (l2) {
      node = new ListNode(l2.val)
      l2 = l2.next
    }

    if (head == null) {
      head = current = node
    } else {
      current.next = node
      current = current.next
    }
  }

  return head
}

// console.log(mergeLinkedList(linkedList1, linkedList2))
// console.log(mergeLinkedList(linkedList1, linkedList2).next)
// console.log(mergeLinkedList(linkedList1, linkedList2).next.next)
// console.log(mergeLinkedList(linkedList1, linkedList2).next.next.next)

// console.log(mergeLinkedList(linkedList3, linkedList2))
// console.log(mergeLinkedList(linkedList3, linkedList2).next)
// console.log(mergeLinkedList(linkedList3, linkedList2).next.next)
// console.log(mergeLinkedList(linkedList3, linkedList2).next.next.next)

/******* 优化迭代法 ** */
function mergeLinkedListPlus(l1, l2) {
  let head = new ListNode()
  let current = head

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val > l2.val) {
        current.next = l2
        l2 = l2.next
      } else {
        current.next = l1
        l1 = l1.next
      }
    } else if (l1) {
      current.next = l1
      l1 = l1.next
    } else if (l2) {
      current.next = l2
      l2 = l2.next
    }

    current = current.next
  }

  return head.next
}

// 因为每次都是给current.next 直接赋值 l1 或 l2，所以不能同时执行以下，避免陷入死循环。
// 或者就是使用优化之前的，每次创建一个新的node
// console.log(mergeLinkedListPlus(linkedList3, linkedList2))
// console.log(mergeLinkedList(linkedList3, linkedList2).next)
// console.log(mergeLinkedList(linkedList3, linkedList2).next.next)
// console.log(mergeLinkedList(linkedList3, linkedList2).next.next.next)

/**
 * 递归的方式
 * @param {*} l1
 * @param {*} l2
 * @returns
 */
function mergeTwoLists(l1, l2) {
  let head = new ListNode()

  function foo(current, l1, l2) {
    if (l1 || l2) {
      if (l1 && l2) {
        if (l1.val > l2.val) {
          current.next = l2
          l2 = l2.next
        } else {
          current.next = l1
          l1 = l1.next
        }
      } else if (l1) {
        current.next = l1
        l1 = l1.next
      } else if (l2) {
        current.next = l2
        l2 = l2.next
      }

      return foo(current.next, l1, l2)
    }

    return current
  }

  foo(head, l1, l2)

  return head.next
}

// console.log(mergeTwoLists(linkedList1, linkedList2))
// console.log(mergeTwoLists(linkedList1, linkedList2).next)
// console.log(mergeTwoLists(linkedList1, linkedList2).next.next)
// console.log(mergeTwoLists(linkedList1, linkedList2).next.next.next)

// console.log(mergeTwoLists(linkedList3, linkedList2))
// console.log(mergeTwoLists(linkedList3, linkedList2).next)
// console.log(mergeTwoLists(linkedList3, linkedList2).next.next)
// console.log(mergeTwoLists(linkedList3, linkedList2).next.next.next)
