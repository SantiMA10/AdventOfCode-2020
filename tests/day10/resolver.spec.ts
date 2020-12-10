import { resolverPart1, resolverPart2 } from "../../src/day10/resolver";
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

  describe("part 2", () => {
    describe("resolverPart2", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day10/test.txt");

        expect(resolverPart2(input)).toEqual(19208);
      });

      it("returns result with the problem input", async () => {
        const input = readFile("day10/input.txt");

        expect(resolverPart2(input)).toEqual(15790581481472);
      });
    });
  });
});
