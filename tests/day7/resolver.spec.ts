import { resolverPart1, resolverPart2 } from "../../src/day7/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 7", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns 4 with the test input", async () => {
        const input = readFile("day7/test.txt");

        expect(resolverPart1(input)).toEqual(4);
      });

      it("returns result with the problem input", async () => {
        const input = readFile("day7/input.txt");

        expect(resolverPart1(input)).toEqual(151);
      });
    });
  });

  describe("part 2", () => {
    describe("resolverPart2", () => {
      it("returns 32 with the test input", async () => {
        const input = readFile("day7/test.txt");

        expect(resolverPart2(input)).toEqual(32);
      });

      it("returns result with the problem input", async () => {
        const input = readFile("day7/input.txt");

        expect(resolverPart2(input)).toEqual(41559);
      });
    });
  });
});
