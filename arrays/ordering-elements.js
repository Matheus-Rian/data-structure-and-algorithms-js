let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// reverse
numbers.reverse()
console.log(numbers)

// sort
numbers.sort()
console.log(numbers)
// [ 1, 10, 2, 3, 4, 5,  6, 7, 8, 9 ]
// The method sort leave the elements in order lexicographical and presupposes that all values is strings

numbers.sort((a, b) => a - b)
console.log(numbers)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]