import {
  resolver,
  letterPositionRule,
  minMaxLetterRule,
} from "../../src/day2/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 2", () => {
  describe("part 1", () => {
    describe("#minMaxLetterRule", () => {
      it("returns true when we enter a valid password entry", async () => {
        const passwordEntry = "1-3 a: abcde";

        expect(minMaxLetterRule(passwordEntry)).toBe(true);
      });

      it("returns true when we enter a valid password entry", async () => {
        const passwordEntry = "2-9 c: ccccccccc";

        expect(minMaxLetterRule(passwordEntry)).toBe(true);
      });

      it("returns false when we enter an invalid password entry", async () => {
        const passwordEntry = "1-3 a: cbcde";

        expect(minMaxLetterRule(passwordEntry)).toBe(false);
      });

      it("returns false when we enter an invalid password entry", async () => {
        const passwordEntry = "1-3 b: cdefg";

        expect(minMaxLetterRule(passwordEntry)).toBe(false);
      });
    });

    describe("#resolver", () => {
      it("returns the number of passwords that are valid from the test.txt", async () => {
        const input = readFile("day2/test.txt");

        expect(resolver(input, minMaxLetterRule)).toEqual(2);
      });

      it("returns the number of passwords that are valid from the input.txt", async () => {
        const input = readFile("day2/input.txt");

        expect(resolver(input, minMaxLetterRule)).toEqual(393);
      });
    });
  });

  describe("part 2", () => {
    describe("#letterPositionRule", () => {
      it("returns true when the password is valid, since position 1 contains a and position 3 does not", async () => {
        const passwordEntry = "1-3 a: abcde";

        expect(letterPositionRule(passwordEntry)).toBe(true);
      });

      it("returns true when the password is valid, since position 3 contains a and position 1 does not", async () => {
        const passwordEntry = "1-3 a: cbade";

        expect(letterPositionRule(passwordEntry)).toBe(true);
      });

      it("returns false when the password isn't valid, since position 1 doesn't contains a b", async () => {
        const passwordEntry = "1-3 b: cdefg";

        expect(letterPositionRule(passwordEntry)).toBe(false);
      });

      it("returns false when the password isn't valid, since position 2 and 9 contains c", async () => {
        const passwordEntry = "2-9 c: ccccccccc";

        expect(letterPositionRule(passwordEntry)).toBe(false);
      });
    });

    describe("#resolver", () => {
      it("returns the number of passwords that are valid from the test.txt", async () => {
        const input = readFile("day2/test.txt");

        expect(resolver(input, letterPositionRule)).toEqual(1);
      });

      it("returns the number of passwords that are valid from the input.txt", async () => {
        const input = readFile("day2/input.txt");

        expect(resolver(input, letterPositionRule)).toEqual(690);
      });
    });
  });
});
