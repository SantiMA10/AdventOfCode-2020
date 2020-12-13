import { ShuttleSearch } from "../../src/day13/ShuttleSearch";

describe("ShuttleSearch", () => {
  describe("#getBusId", () => {
    it("returns 59 as the bus id", async () => {
      const subject = new ShuttleSearch({
        timestamp: 939,
        busses: ["7", "13", "x", "x", "59", "x", "31", "19"],
      });

      expect(subject.getBusId()).toEqual(59);
    });

    it("returns 7 as the bus id", async () => {
      const subject = new ShuttleSearch({
        timestamp: 945,
        busses: ["7", "13", "x", "x", "59", "x", "31", "19"],
      });

      expect(subject.getBusId()).toEqual(7);
    });
  });

  describe("#getWaitingTime", () => {
    it("returns 5 for the 59 bus", async () => {
      const subject = new ShuttleSearch({
        timestamp: 939,
        busses: ["7", "13", "x", "x", "59", "x", "31", "19"],
      });

      expect(subject.getWaitingTime()).toEqual(5);
    });

    it("returns 0 for the 7 bus", async () => {
      const subject = new ShuttleSearch({
        timestamp: 945,
        busses: ["7", "13", "x", "x", "59", "x", "31", "19"],
      });

      expect(subject.getWaitingTime()).toEqual(0);
    });

    it("returns 3 for the 13 bus", async () => {
      const subject = new ShuttleSearch({
        timestamp: 946,
        busses: ["7", "13", "x", "x", "59", "x", "31", "19"],
      });

      expect(subject.getWaitingTime()).toEqual(3);
    });
  });
});
