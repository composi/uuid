import { uuid } from "../src"

test("uuid should create a string.", function () {
  const id = uuid()
  expect(typeof id).toBe('string')
})

test("uuid should have 36 characters.", () => {
  const id = uuid()
  expect(id.length).toEqual(36)
})

test('uuid should have hyphens', function() {
  const id = uuid()
  expect(/-/img.test(id)).toBe(true)
  expect(id.split('-').length).toEqual(5)
})

test('uuid with truthy param should return uuid without hyphens', function() {
  const id = uuid(true)
  expect(id.length).toEqual(32)
  expect(/-/img.test(id)).toBe(false)
  expect(id.split('-').length).toEqual(1)
})
