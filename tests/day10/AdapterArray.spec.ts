import { AdapterArray } from "../../src/day10/AdapterArray";

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
        28,
        33,
        18,
        42,
        31,
        14,
        46,
        20,
        48,
        47,
        24,
        23,
        49,
        45,
        19,
        38,
        39,
        11,
        1,
        32,
        25,
        35,
        8,
        17,
        7,
        9,
        4,
        2,
        34,
        10,
        3
      );

      expect(220).toEqual(subject.getNumberOfJoltsDifferences());
    });
  });
});
