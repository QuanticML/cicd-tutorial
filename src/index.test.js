const sayHi = require('./index.js')

test("Says 'Hello Scottie' when 'Scottie' is passed", () => {
  expect(sayHi('Scottie')).toBe('Hello Scottie')
})
