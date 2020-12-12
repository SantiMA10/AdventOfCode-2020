import { resolverPart1 } from "../../src/day12/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 12", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day12/test.txt");

        expect(resolverPart1(input)).toEqual(25);
      });

      it("returns result with the problem input", async () => {
        const input = readFile("day12/input.txt");

        expect(resolverPart1(input)).toEqual(521);
      });
    });
  });
});
