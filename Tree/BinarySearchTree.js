// 二叉搜索树 BST
// 一个键最多有两个子节点，分别是左子节点和右子节点

class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

// 添加节点的辅助函数
function insertNode(node, newNode) {
  if (node.key > newNode.key) {
    // left
    if (node.left === null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    // right
    if (node.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}
// 中序遍历辅助函数
function inOrderTraverseNode(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key)
    inOrderTraverseNode(node.right, callback)
  }
}

// 先序遍历辅助函数
function preOrderTraverseNode(node, callback) {
  if (node !== null) {
    callback(node.key)
    preOrderTraverseNode(node.left, callback)
    preOrderTraverseNode(node.right, callback)
  }
}

// 后序遍历辅助函数
function postOrderTraverseNode(node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback)
    postOrderTraverseNode(node.right, callback)
    callback(node.key)
  }
}

/**
 * 辅助函数的好处是 node 可以是树中的任意一个节点（子树）
 * @param {*} node
 * @returns
 */
function minNode(node) {
  if (node) {
    while (node.left) {
      node = node.left
    }

    return node.key
  }

  return null
}

function maxNode(node) {
  if (node) {
    while (node.right) {
      node = node.right
    }
    return node.key
  }

  return null
}

function searchNode(node, key) {
  if (node === null) return false

  if (node.key < key) {
    return searchNode(node.right, key)
  } else if (node.key > key) {
    return searchNode(node.left, key)
  }
  return node
}

function removeNode(node, key) {
  let current = searchNode(node, key)

  console.log(current)

  if (current) {
    current = null
  }

  return true
}

// 获取后续节点，即从要删除的节点的右边开始查找最小的值
function getSuccessor(delNode) {
  // 定义变量，保存要找到的后续
  let successor = delNode
  let current = delNode.right
  let successorParent = delNode

  // 循环查找 current 的右子树节点
  while (current !== null) {
    successorParent = successor
    successor = current
    current = current.left
  }

  // 判断寻找到的后续节点是否直接就是要删除节点的 right
  if (successor !== delNode.right) {
    successorParent.left = successor.right
    successor.right = delNode.right
  }
  return successor
}

class BinarySearchTree {
  #root = null

  // 便于调试
  getRoot() {
    return this.#root
  }

  insert(key) {
    const node = new Node(key)

    if (this.#root === null) {
      this.#root = node
    } else {
      insertNode(this.#root, node)
    }
  }

  /**
   * 中序遍历：以上行顺序(即：从小到大)访问BST所有节点的遍历方式
   * 应用：对树进行排序操作
   * @param {*} callback
   */
  inOrderTraverse(callback) {
    inOrderTraverseNode(this.#root, callback)
  }

  /**
   * 先序遍历：以优先于后代节点的顺序访问每个节点的遍历方式。先访问节点本身，然后左子节点，最后右子节点
   * 应用：打印结构化的文档
   * @param {*} callback
   */
  preOrderTraverse(callback) {
    preOrderTraverseNode(this.#root, callback)
  }

  /**
   * 后序遍历：先访问后代节点，再访问节点本身的遍历方式
   * 应用：计算一个目录和它的所有子目录中所有文件所占空间的大小
   * @param {*} callback
   */
  postOrderTraverse(callback) {
    postOrderTraverseNode(this.#root, callback)
  }

  /**
   * 最小值：左侧最底层的节点
   * @returns
   */
  min() {
    // let current = this.#root
    // while (current.left) {
    //   current = current.left
    // }
    // return current.key

    return minNode(this.#root)
  }

  /**
   * 最大值：右侧最底层的节点
   * @returns
   */
  max() {
    // let current = this.#root
    // while (current.right) {
    //   current = current.right
    // }
    // return current.key

    return maxNode(this.#root)
  }

  /**
   * 查找节点
   * @param {*} key
   * @returns
   */
  search(key) {
    // let current = this.#root
    // while (current) {
    //   if (current.key < key) {
    //     current = current.right
    //   } else if (current.key > key) {
    //     current = current.left
    //   } else {
    //     return current
    //   }
    // }
    // return false

    // 辅助函数的好处：可复用且可查找任意子树上的节点
    return searchNode(this.#root, key)
  }

  remove(key) {
    let current = this.#root
    let parent = this.#root
    let isLeft = true

    // 寻找删除的节点
    while (current && current.key !== key) {
      parent = current

      if (current.key < key) {
        current = current.right
        isLeft = false
      } else {
        current = current.left
        isLeft = true
      }
    }

    if (current === null) return false

    // 叶子节点（无左右子节点）
    if (current.left === null && current.right === null) {
      if (parent === this.#root) {
        this.#root = null
      } else if (isLeft) {
        parent.left = null
      } else {
        parent.right = null
      }
    }
    // 无左子节点的节点
    else if (current.left === null) {
      if (current === this.#root) {
        this.#root = current.right
      } else if (isLeft) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    }
    // 无右子节点的节点
    else if (current.right === null) {
      if (current === this.#root) {
        this.#root = current.left
      } else if (isLeft) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    }
    // 有左右子节点的节点
    else {
      // 1、找到后续节点
      const successor = getSuccessor(current)

      // 2、判断是否为根节点
      if (current === this.root) {
        this.root = successor
      } else if (isLeft) {
        parent.left = successor
      } else {
        parent.right = successor
      }

      // 3、将后续的左节点改为被删除的左节点
      successor.left = current.left
    }

    return true
  }
}
