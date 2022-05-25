// 搜索二叉树
// 一个键最多有两个子节点，分别是左子节点和右子节点

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  #root = null

  #insertNode(node, newNode) {
    if (node.key > newNode.key) {
      // left
      if (node.left === null) {
        node.left = newNode
      } else {
        this.#insertNode(node.left, newNode)
      }
    } else {
      // right
      if (node.right === null) {
        node.right = newNode
      } else {
        this.#insertNode(node.right, newNode)
      }
    }
  }

  // 便于调试
  getRoot() {
    return this.#root
  }

  insert(key) {
    const node = new Node(key)

    if (this.#root === null) {
      this.#root = node
    } else {
      this.#insertNode(this.#root, node)
    }
  }
}
