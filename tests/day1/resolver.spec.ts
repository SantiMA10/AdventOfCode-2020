import { resolverPart1, resolverPart2 } from "../../src/day1/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 1", () => {
  describe("part 1", () => {
    it("find the two entries that sum to 2020 and then multiply those two numbers together", async () => {
      const input = readFile(`day1/test.txt`);

      const result = resolverPart1(input);

      expect(result).toEqual(514579);
    });

    it("find the two entries that sum to 2020 and then multiply those two numbers together with the input data", async () => {
      const input = readFile(`day1/input.txt`);

      const result = resolverPart1(input);

      expect(result).toEqual(355875);
    });
  });

  describe("part 2", () => {
    it("find the three entries that sum to 2020 and then multiply those two numbers together", async () => {
      const input = readFile(`day1/test.txt`);

      const result = resolverPart2(input);

      expect(result).toEqual(241861950);
    });

    it("find the three entries that sum to 2020 and then multiply those two numbers together with the input data", async () => {
      const input = readFile(`day1/input.txt`);

      const result = resolverPart2(input);

      expect(result).toEqual(140379120);
    });
  });
});
