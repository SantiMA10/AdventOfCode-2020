import { resolverPart1 } from "../../src/day11/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 11", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day11/test.txt");

        expect(resolverPart1(input)).toEqual(37);
      });

      it("returns result with the problem input", async () => {
        const input = readFile("day11/input.txt");

        expect(resolverPart1(input)).toEqual(2261);
      });
    });
  });
});
