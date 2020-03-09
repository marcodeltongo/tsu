import {
  camelToKebab,
  camelToPascal,
  camelToSnake,
  kebabToCamel,
  kebabToPascal,
  kebabToSnake,
  pascalToCamel,
  pascalToKebab,
  pascalToSnake,
  snakeToCamel,
  snakeToKebab,
  snakeToPascal,
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase,
} from ".."

const baseString = "This is a test string"
const titleString = "This Is A Test String"
const camelString = "thisIsATestString"
const kebabString = "this-is-a-test-string"
const snakeString = "this_is_a_test_string"
const pascalString = "ThisIsATestString"

describe("String cases and notations", () => {
  test("should convert to camelCase", () => {
    expect(toCamelCase(baseString)).toMatch(camelString)
    expect(toCamelCase(titleString)).toMatch(camelString)
    expect(kebabToCamel(kebabString)).toMatch(camelString)
    expect(pascalToCamel(pascalString)).toMatch(camelString)
    expect(snakeToCamel(snakeString)).toMatch(camelString)
  })

  test("should convert to kebab-case", () => {
    expect(toKebabCase(baseString)).toMatch(kebabString)
    expect(toKebabCase(titleString)).toMatch(kebabString)
    expect(camelToKebab(camelString)).toMatch(kebabString)
    expect(pascalToKebab(pascalString)).toMatch(kebabString)
    expect(snakeToKebab(snakeString)).toMatch(kebabString)
  })

  test("should convert to PascalCase", () => {
    expect(toPascalCase(baseString)).toMatch(pascalString)
    expect(toPascalCase(titleString)).toMatch(pascalString)
    expect(camelToPascal(camelString)).toMatch(pascalString)
    expect(kebabToPascal(kebabString)).toMatch(pascalString)
    expect(snakeToPascal(snakeString)).toMatch(pascalString)
  })

  test("should convert to snake_case", () => {
    expect(toSnakeCase(baseString)).toMatch(snakeString)
    expect(toSnakeCase(titleString)).toMatch(snakeString)
    expect(camelToSnake(camelString)).toMatch(snakeString)
    expect(kebabToSnake(kebabString)).toMatch(snakeString)
    expect(pascalToSnake(pascalString)).toMatch(snakeString)
  })
})
