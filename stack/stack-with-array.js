export class Stack {
  constructor () {
    this.items = []
  }

  push(...items) {
    for (const item of items)
      this.items.push(item)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  clear() {
    this.items = []
  }

  size() {
    return this.items.length
  }
}

// const stack = new Stack()
// stack.push('Box', 'table')
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.isEmpty())

// stack.clear()
// console.log(stack.isEmpty())

// console.log(stack.size())