let numbers = [1, 2, 3, 4, 5, 6]

Array.prototype.removeAllUndefinedsOfArray = function (targetArray) {
  const newArray = []
  for (let value of targetArray) {
    if (value)
      newArray.push(value)
  }

  return newArray
} 

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }

  return this.removeAllUndefinedsOfArray(this)
}

numbers = numbers.removeFirstPosition()
console.log(numbers)

// It's just like

numbers.shift()
