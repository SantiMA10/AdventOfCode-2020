import { resolverPart1 } from "../../src/day9/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 9", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day9/input.txt");

        expect(resolverPart1(input)).toEqual(530627549);
      });
    });
  });
});
