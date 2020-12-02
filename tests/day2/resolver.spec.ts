import { resolver, validatePassword } from "../../src/day2/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 2", () => {
  describe("part 1", () => {
    describe("#validatePassword", () => {
      it("returns true when we enter a valid password entry", async () => {
        const passwordEntry = "1-3 a: abcde";

        expect(validatePassword(passwordEntry)).toBe(true);
      });

      it("returns true when we enter a valid password entry", async () => {
        const passwordEntry = "2-9 c: ccccccccc";

        expect(validatePassword(passwordEntry)).toBe(true);
      });

      it("returns false when we enter an invalid password entry", async () => {
        const passwordEntry = "1-3 a: cbcde";

        expect(validatePassword(passwordEntry)).toBe(false);
      });

      it("returns false when we enter an invalid password entry", async () => {
        const passwordEntry = "1-3 b: cdefg";

        expect(validatePassword(passwordEntry)).toBe(false);
      });
    });

    describe("#resolverPart1", () => {
      it("returns the number of passwords that are valid from the test.txt", async () => {
        const input = readFile("day2/test.txt");

        expect(resolver(input, validatePassword)).toEqual(2);
      });

      it("returns the number of passwords that are valid from the input.txt", async () => {
        const input = readFile("day2/input.txt");

        expect(resolver(input, validatePassword)).toEqual(393);
      });
    });
  });
});
