const sayHi = require('./index.js')

test("Says 'hello student' when 'student' is passed", () => {
  expect(sayHi('student')).toBe('hello student')
})
