import { resolverPart1 } from "../../src/day10/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 10", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day10/test.txt");

        expect(resolverPart1(input)).toEqual(220);
      });

      it("returns result with the problem input", async () => {
        const input = readFile("day10/input.txt");

        expect(resolverPart1(input)).toEqual(2484);
      });
    });
  });
});
