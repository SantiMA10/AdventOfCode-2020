import { WaypointCalculator } from "../../src/day12/WaypointCalculator";

describe("WaypointCalculator", () => {
  describe("#getManhattanDistance", () => {
    it("returns 110, since F10 moves the ship to the waypoint 10 times (a total of 100 units east and 10 units north), leaving the ship at east 100, north 10. The waypoint stays 10 units east and 1 unit north of the ship.", async () => {
      const subject = new WaypointCalculator({
        east: 10,
        north: 1,
        instructions: ["F10"],
      });

      expect(subject.getManhattanDistance()).toEqual(110);
    });

    it("returns 110, since N3 moves the waypoint 3 units north to 10 units east and 4 units north of the ship. The ship remains at east 100, north 10.", async () => {
      const subject = new WaypointCalculator({
        east: 10,
        north: 1,
        instructions: ["F10", "N3"],
      });

      expect(subject.getManhattanDistance()).toEqual(110);
    });

    it("returns 208, since F7 moves the ship to the waypoint 7 times (a total of 70 units east and 28 units north), leaving the ship at east 170, north 38. The waypoint stays 10 units east and 4 units north of the ship.", async () => {
      const subject = new WaypointCalculator({
        east: 10,
        north: 1,
        instructions: ["F10", "N3", "F7"],
      });

      expect(subject.getManhattanDistance()).toEqual(208);
    });

    it("returns 208, since R90 rotates the waypoint around the ship clockwise 90 degrees, moving it to 4 units east and 10 units south of the ship. The ship remains at east 170, north 38.", async () => {
      const subject = new WaypointCalculator({
        east: 10,
        north: 1,
        instructions: ["F10", "N3", "F7", "R90"],
      });

      expect(subject.getManhattanDistance()).toEqual(208);
    });

    it("returns 208, F11 moves the ship to the waypoint 11 times (a total of 44 units east and 110 units south), leaving the ship at east 214, south 72. The waypoint stays 4 units east and 10 units south of the ship.", async () => {
      const subject = new WaypointCalculator({
        east: 10,
        north: 1,
        instructions: ["F10", "N3", "F7", "R90", "F11"],
      });

      expect(subject.getManhattanDistance()).toEqual(286);
    });

    it("returns 208, F11 moves the ship to the waypoint 11 times (a total of 44 units east and 110 units south), leaving the ship at east 214, south 72. The waypoint stays 4 units east and 10 units south of the ship.", async () => {
      const subject = new WaypointCalculator({
        east: 10,
        north: 1,
        instructions: ["F10", "N3", "F7", "L270", "F11"],
      });

      expect(subject.getManhattanDistance()).toEqual(286);
    });
  });
});
