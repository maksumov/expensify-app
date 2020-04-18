const add = (a, b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('should generate greeting from name', () => {
  expect(generateGreeting('Mike')).toBe('Hello Mike!')
})

test('should generate greeting for noname', () => {
  expect(generateGreeting()).toBe('Hello Anonymous!')
})
