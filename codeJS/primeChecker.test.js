const primeChecker = require("./primeChecker")

//Definition
// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. 
//A natural number greater than 1 that is not prime is called a composite number. 
//For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself.

//1 -> is not prime
//2 -> is prime
//Etc any value diversable is considered non prime

test('properly validates if a number is a prime or not', () => {
//test functions
    expect(primeChecker(1)).toBe(false)
    expect(primeChecker(2)).toBe(true)
    expect(primeChecker(5)).toBe(true)
})