import { resolverPart1 } from "../../src/day13/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 13", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns result with the test input", async () => {
        const input = readFile("day13/test.txt");

        expect(resolverPart1(input)).toEqual(295);
      });

      it("returns result with the problem input", async () => {
        const input = readFile("day13/input.txt");

        expect(resolverPart1(input)).toEqual(119);
      });
    });
  });
});
