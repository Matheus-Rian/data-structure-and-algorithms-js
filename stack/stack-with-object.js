class Stack {
  #count = 0
  #items = {}

  constructor () {}

  push(element) {
    this.#items[this.#count] = element
    this.#count++
  }

  pop() {
    if (this.isEmpty()) {
      return undefined
    }
    
    this.#count--
    const result = this.#items[this.#count]
    delete this.#items[this.#count]

    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.#items[this.#count - 1]
  }

  isEmpty() {
    return this.#count === 0
  }

  size() {
    return this.#count
  }

  clear() {
    this.#items = {}
    this.#count = 0
  }

  toString() {
    if (this.isEmpty()) {
      return 'Empty'
    }

    let objString = `${this.#items[0]}`
    for (let i = 1; i < this.#count; i++) {
      objString = `${objString}, ${this.#items[i]}`
    }

    return objString
  }
}

const stack = new Stack()
stack.push(8)
stack.push(8)
stack.push(5)
stack.push(8)
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.toString())
stack.clear()
console.log(stack.toString())
console.log(Object.getOwnPropertyNames(stack))
