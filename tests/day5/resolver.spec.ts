import { resolverPart1, resolverPart2 } from "../../src/day5/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 5", () => {
  describe("part 1", () => {
    describe("resolverPart1", () => {
      it("returns 820 with the problem test", async () => {
        const input = readFile("day5/test.txt");

        expect(resolverPart1(input)).toEqual(820);
      });

      it("returns 965 with the problem input", async () => {
        const input = readFile("day5/input.txt");

        expect(resolverPart1(input)).toEqual(965);
      });
    });
  });

  describe("part 2", () => {
    describe("resolverPart2", () => {
      it("returns my seat id with the problem input", async () => {
        const input = readFile("day5/input.txt");

        expect(resolverPart2(input)).toEqual(524);
      });
    });
  });
});
