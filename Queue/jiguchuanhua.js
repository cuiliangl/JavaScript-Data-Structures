// 击鼓传花

const Queue = require('./Queue')

function ji(nums, count) {
  const queue = new Queue()

  for (let i = 0; i < nums.length; i++) {
    queue.enqueue(nums[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < count - 1; i++) {
      // 队头取出添加到队尾
      queue.enqueue(queue.dequeue())
    }

    // 剔除命中的
    queue.dequeue()
  }

  return queue.front()
}

console.log(ji([1, 2, 3, 4], 3)) // 1
// 4 1 2
// 4 1
// 4 1 --> 1
