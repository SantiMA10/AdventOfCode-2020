import { AdapterArray } from "../../src/day10/AdapterArray";
import { readFile } from "../../src/utils/utils";

describe("AdapterArray", () => {
  describe("#getNumberOfJoltsDifferences", () => {
    it("returns 21, since the are 7 differences of 1 jolt and 5 differences of 3 jolt", async () => {
      const subject = new AdapterArray(16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4);

      expect(35).toEqual(subject.getNumberOfJoltsDifferences());
    });

    it("returns 10, since the are 5 differences of 1 jolt and 2 differences of 3 jolt", async () => {
      const subject = new AdapterArray(1, 2, 3, 8, 4, 5);

      expect(10).toEqual(subject.getNumberOfJoltsDifferences());
    });

    it("returns 220, since the are 22 differences of 1 jolt and 10 differences of 3 jolt", async () => {
      const subject = new AdapterArray(
        ...readFile("day10/test.txt")
          .split("\n")
          .map((i) => parseInt(i, 10))
      );

      expect(220).toEqual(subject.getNumberOfJoltsDifferences());
    });
  });

  describe("#getNumberOfSupportedArrangements", () => {
    it("returns 8, since we have different options", async () => {
      const subject = new AdapterArray(16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4);

      expect(8).toEqual(subject.getNumberOfSupportedArrangements());
    });

    it("returns 10, since we have different options", async () => {
      const subject = new AdapterArray(1, 2, 3, 8, 4, 5);

      expect(10).toEqual(subject.getNumberOfJoltsDifferences());
    });
  });
});
