const defineTriangle = require('./app');

const equilateral = 'equilateral'
const error = 'error'
const isosceles = 'isosceles'
const common = 'common'
const notTriangle = 'not_a_triangle'

test('Равносторонний треугольник с целыми сторонами', () => {
    expect(defineTriangle(1, 1, 1)).toBe(equilateral)
})

test('Равносторонний треугольник с дробными сторонами', () => {
    expect(defineTriangle(0.1, 0.1, 0.1)).toBe(equilateral)
})

test('Стороны равны граничному значению', () => {
    expect(defineTriangle(0.00000000001, 0.00000000001, 0.00000000001)).toBe(equilateral)
})

test('Стороны меньше граничному значению', () => {
    expect(defineTriangle(0.000000000009, 0.000000000009, 0.000000000009)).toBe(error)
})

test('Невалидный вход, а - строка', () => {
    expect(defineTriangle('1a', 2, 3)).toBe(error)
})

test('Невалидный вход, b - строка', () => {
    expect(defineTriangle(1, '2b', 3)).toBe(error)
})

test('Невалидный вход, c - строка', () => {
    expect(defineTriangle(1, 2, '3g')).toBe(error)
})

test('Равносторонний при a = b', () => {
    expect(defineTriangle(2, 2, 3)).toBe(isosceles)
})

test('Равносторонний при b = c', () => {
    expect(defineTriangle(3, 2, 2)).toBe(isosceles)
})

test('Равносторонний при a = c', () => {
    expect(defineTriangle(2, 3, 2)).toBe(isosceles)
})

test('Обычный треугольник', () => {
    expect(defineTriangle(4, 5, 8)).toBe(common)
})

test('Обычный треугольник с большими числами', () => {
    expect(defineTriangle(Number.MAX_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER + 2, Number.MAX_SAFE_INTEGER + 3)).toBe(error)
})

test('Равносторонний треугольник с максимальным числом', () => {
    expect(defineTriangle(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(equilateral)
})

test('Не треугольник, a > b + c', () => {
    expect(defineTriangle(4, 2, 1)).toBe(notTriangle)
})

test('Не треугольник, b > a + c', () => {
    expect(defineTriangle(2, 4, 1)).toBe(notTriangle)
})

test('Не треугольник, c > b + a', () => {
    expect(defineTriangle(1, 2, 4)).toBe(notTriangle)
})

test('Не треугольник, c = b + a', () => {
    expect(defineTriangle(1, 2, 3)).toBe(notTriangle)
})

test('Не треугольник с дробными числами', () => {
    expect(defineTriangle(0.1, 0.2, 0.4)).toBe(notTriangle)
})

test('отсутствует c', () => {
    expect(defineTriangle(0.1, 0.2)).toBe(error)
})

test('отсутствует c и b', () => {
    expect(defineTriangle(0.1)).toBe(error)
})

test('отсутствует a, c и b', () => {
    expect(defineTriangle()).toBe(error)
})

test('треугольник с отрицательными числами', () => {
    expect(defineTriangle(-1, -2, -3)).toBe(error)
})

test('треугольник со стороной 0', () => {
    expect(defineTriangle(0, 3, 3)).toBe(error)
})