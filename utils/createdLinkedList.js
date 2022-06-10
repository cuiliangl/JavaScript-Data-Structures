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

module.exports = createLinkedList
