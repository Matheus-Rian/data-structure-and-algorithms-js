class Stack {
  constructor () {
    this.items = []
  }

  add(...items) {
    for (const item of items)
      this.items.push(item)
  }

  remove() {
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

const stack = new Stack()
stack.add('Box', 'table')
console.log(stack.remove())
console.log(stack.peek())
console.log(stack.isEmpty())


stack.clear()
console.log(stack.isEmpty())

console.log(stack.size())