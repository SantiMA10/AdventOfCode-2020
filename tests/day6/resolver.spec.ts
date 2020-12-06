import { resolverPart1, resolverPart2 } from "../../src/day6/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 6", () => {
  describe("part 1", () => {
    describe("resolver", () => {
      it("returns 11 with the test input", async () => {
        const input = readFile("day6/test.txt");

        expect(resolverPart1(input)).toEqual(11);
      });

      it("returns the answer with the problem input", async () => {
        const input = readFile("day6/input.txt");

        expect(resolverPart1(input)).toEqual(6585);
      });
    });
  });

  describe("part 2", () => {
    describe("resolver", () => {
      it("returns 6 with the test input", async () => {
        const input = readFile("day6/test.txt");

        expect(resolverPart2(input)).toEqual(6);
      });

      it("returns the answer with the problem input", async () => {
        const input = readFile("day6/input.txt");

        expect(resolverPart2(input)).toEqual(3276);
      });
    });
  });
});
