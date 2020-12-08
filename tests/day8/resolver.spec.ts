import { resolverPart1, resolverPart2 } from "../../src/day8/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 8", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day8/test.txt");

        expect(resolverPart1(input)).toEqual(5);
      });

      it("returns result with the test input", async () => {
        const input = readFile("day8/input.txt");

        expect(resolverPart1(input)).toEqual(1797);
      });
    });
  });

  describe("part 2", () => {
    describe("resolverPart2", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day8/test.txt");

        expect(resolverPart2(input)).toEqual(8);
      });

      it("returns result with the test input", async () => {
        const input = readFile("day8/input.txt");

        expect(resolverPart2(input)).toEqual(1036);
      });
    });
  });
});
