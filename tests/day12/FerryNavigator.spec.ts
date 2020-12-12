import { FerryNavigator } from "../../src/day12/FerryNavigator";

describe("FerryNavigator", () => {
  describe("#getManhattanDistance", () => {
    it("returns 10 because F10 would move the ship 10 units east (because the ship starts by facing east) to east 10, north 0.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10"],
      });

      expect(subject.getManhattanDistance()).toEqual(10);
    });

    it("returns 13 because N3 would move the ship 3 units north to east 10, north 3.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10", "N3"],
      });

      expect(subject.getManhattanDistance()).toEqual(13);
    });

    it("returns 20 because F7 would move the ship another 7 units east (because the ship is still facing east) to east 17, north 3.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10", "N3", "F7"],
      });

      expect(subject.getManhattanDistance()).toEqual(20);
    });

    it("returns 25 because S11 would move the ship 11 units south to east 17, south 8.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10", "N3", "F7", "S11"],
      });

      expect(subject.getManhattanDistance()).toEqual(25);
    });

    it("returns 25 because F11 would move the ship 11 units south to east 17, south 8.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10", "N3", "F7", "R90", "F11"],
      });

      expect(subject.getManhattanDistance()).toEqual(25);
    });

    it("returns 9 because F11 would move the ship 11 units west to east 6, north 3.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10", "N3", "F7", "R180", "F11"],
      });

      expect(subject.getManhattanDistance()).toEqual(9);
    });

    it("returns 9 because F11 would move the ship 11 units west to east 6, north 3.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10", "N3", "F7", "L180", "F11"],
      });

      expect(subject.getManhattanDistance()).toEqual(9);
    });

    it("returns 25 because F11 would move the ship 11 units south to east 17, south 8.", async () => {
      const subject = new FerryNavigator({
        facing: "E",
        instructions: ["F10", "N3", "F7", "L270", "F11"],
      });

      expect(subject.getManhattanDistance()).toEqual(25);
    });
  });
});
