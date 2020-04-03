//@ts-nocheck

const test = require('baretest')('Stack Operation testing'),
  assert = require('assert')
  books = require('./stack')


test('Add a new book', () => {
  books.push("Engineering Maths")
  assert.equal(books.peek(), "Engineering Maths")
})

test('Remove the book', () => {
  books.pop()
  assert.ok(books.length() == 0)
})

test('Add another book', () => {
  books.push("Engineering Thermodynamics")
  assert.equal(books.peek(), "Engineering Thermodynamics")  
})

test('Shoud false', () => {
  assert.notStrictEqual(books.peek(), "Engineering Maths")
})

test('Add a random book', () => {
  books.push("Random book")
  assert.equal(books.peek(), "Random book")
})

test('Confirm stack length', () => {
  assert.ok(books.length() == 2)
})

test.run()
