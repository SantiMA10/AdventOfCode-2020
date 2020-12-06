import { resolverPart1 } from "../../src/day6/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 6", () => {
  describe("part 1", () => {
    describe("resolver 1", () => {
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
});
