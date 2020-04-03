const books = require('../stack')

describe('Test the stack data structure implementation', () => {
    beforeAll(() => {
        books.clear()
    })
    
    test('Add a new book', () => {
        books.push("Engineering Maths")
        expect(books.peek()).toBe("Engineering Maths")
    })

    test('Remove the book', () => {
        books.pop()
        expect(books.length()).toBe(0)
    })

    test('Add another book', () => {
        books.push("Engineering Thermodynamics")
        expect(books.peek()).toEqual("Engineering Thermodynamics")
    })

    test('Should return false', () => {
        expect(books.peek()).not.toEqual("Engineering Maths")
    })

    test('Add a random book', () => {
        books.push("Random book")
        expect(books.peek()).toBe("Random book")
    })

    test('Confirm stack length', () => {
        expect(books.length()).toBe(2)
    })
})

