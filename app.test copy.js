const {defineTriangle, triangleType} = require('./app');

test('Равносторонний треугольник с целыми сторонами', () => {
    expect(defineTriangle(1, 1, 1)).toBe(triangleType.equilateral)
})

test('Равносторонний треугольник с дробными сторонами', () => {
    expect(defineTriangle(0.1, 0.1, 0.1)).toBe(triangleType.equilateral)
})

test('Стороны равны граничному значению', () => {
    expect(defineTriangle(0.00000000001, 0.00000000001, 0.00000000001)).toBe(triangleType.equilateral)
})

test('Стороны меньше граничному значению', () => {
    expect(defineTriangle(0.000000000009, 0.000000000009, 0.000000000009)).toBe(triangleType.error)
})

test('Невалидный вход, а - строка', () => {
    expect(defineTriangle('1a', 2, 3)).toBe(triangleType.error)
})

test('Невалидный вход, b - строка', () => {
    expect(defineTriangle(1, '2b', 3)).toBe(triangleType.error)
})

test('Невалидный вход, c - строка', () => {
    expect(defineTriangle(1, 2, '3g')).toBe(triangleType.error)
})

test('Равносторонний при a = b', () => {
    expect(defineTriangle(2, 2, 3)).toBe(triangleType.isosceles)
})

test('Равносторонний при b = c', () => {
    expect(defineTriangle(3, 2, 2)).toBe(triangleType.isosceles)
})

test('Равносторонний при a = c', () => {
    expect(defineTriangle(2, 3, 2)).toBe(triangleType.isosceles)
})

test('Обычный треугольник', () => {
    expect(defineTriangle(4, 5, 8)).toBe(triangleType.common)
})

test('Обычный треугольник с большими числами', () => {
    expect(defineTriangle(Number.MAX_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER + 2, Number.MAX_SAFE_INTEGER + 3)).toBe(triangleType.error)
})

test('Равносторонний треугольник с максимальным числом', () => {
    expect(defineTriangle(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)).toBe(triangleType.equilateral)
})

test('Не треугольник, a > b + c', () => {
    expect(defineTriangle(4, 2, 1)).toBe(triangleType.notTriangle)
})

test('Не треугольник, b > a + c', () => {
    expect(defineTriangle(2, 4, 1)).toBe(triangleType.notTriangle)
})

test('Не треугольник, c > b + a', () => {
    expect(defineTriangle(1, 2, 4)).toBe(triangleType.notTriangle)
})

test('Не треугольник, c = b + a', () => {
    expect(defineTriangle(1, 2, 3)).toBe(triangleType.notTriangle)
})

test('Не треугольник с дробными числами', () => {
    expect(defineTriangle(0.1, 0.2, 0.4)).toBe(triangleType.notTriangle)
})

test('отсутствует c', () => {
    expect(defineTriangle(0.1, 0.2)).toBe(triangleType.error)
})

test('отсутствует c и b', () => {
    expect(defineTriangle(0.1)).toBe(triangleType.error)
})

test('отсутствует a, c и b', () => {
    expect(defineTriangle()).toBe(triangleType.error)
})

test('треугольник с отрицательными числами', () => {
    expect(defineTriangle(-1, -2, -3)).toBe(triangleType.error)
})

test('треугольник со стороной 0', () => {
    expect(defineTriangle(0, 3, 3)).toBe(triangleType.error)
})

test('треугольник со сторонами 0', () => {
    expect(defineTriangle(0, 0, 0)).toBe(triangleType.error)
})

test('равносторонний треугольник с числами в формате 2e1', () => {
    expect(defineTriangle(2e1, 2e1, 2e1)).toBe(triangleType.equilateral)
})

test('равносторонний треугольник со сторонами в 16 системе счисления', () => {
    expect(defineTriangle(0xD, 0xD, 0xD)).toBe(triangleType.equilateral)
})

test('равносторонний треугольник со сторонами в 2 системе счисления', () => {
    expect(defineTriangle(0b11, 0b11, 0b11)).toBe(triangleType.equilateral)
})

test('равносторонний треугольник со сторонами в 8 системе счисления', () => {
    expect(defineTriangle(0o4, 0o5, 0o6)).toBe(triangleType.common)
})