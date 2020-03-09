import { joinKeysWithTruthyValues } from ".."

describe("joinKeysWithTruthyValues", () => {
  test("should find all and only the keys with truthy values", () => {
    const testObject = {
      boolean: true,
      booleanFalse: false,
      string: "something",
      falsyString: "",
      number: 1,
      negativeNumber: -1,
      falsyNumber: 0,
      arrayLen: ["tags"].length,
      falsyArrayLen: [].length,
      falsyFunction: (): boolean => false,
      truthyFunction: (): boolean => process.env.NODE_ENV === "test",
    }
    expect(joinKeysWithTruthyValues(testObject)).toBe(
      "boolean string number negativeNumber arrayLen truthyFunction"
    )
  })
})
