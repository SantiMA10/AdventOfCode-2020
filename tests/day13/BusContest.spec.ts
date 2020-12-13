import { BusContest } from "../../src/day13/BusContest";

describe("BusContest", () => {
  describe("#getMagicTimestamp", () => {
    it("return 3417 since is the earliest timestamp that matches the criteria", async () => {
      const subject = new BusContest({
        busses: ["17", "x", "13", "19"],
      });

      expect(subject.getMagicTimestamp()).toEqual(3417);
    });

    it("return 1202161486 since is the earliest timestamp that matches the criteria", async () => {
      const subject = new BusContest({
        busses: ["1789", "37", "47", "1889"],
      });

      expect(subject.getMagicTimestamp()).toEqual(1202161486);
    });
  });
});
