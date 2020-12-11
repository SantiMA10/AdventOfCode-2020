import { GameOfSeats } from "../../src/day11/GameOfSeats";
import { readFile } from "../../src/utils/utils";

describe("GameOfSeats", () => {
  describe("#next", () => {
    it("returns the expected next state", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeats(initialState);

      const state = subject.next();

      expect(state).toEqual(`#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##`);
    });

    it("returns the expected state after two iterations ", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeats(initialState);

      subject.next();
      const state = subject.next();

      expect(state).toEqual(`#.LL.L#.##
#LLLLLL.L#
L.L.L..L..
#LLL.LL.L#
#.LL.LL.LL
#.LLLL#.##
..L.L.....
#LLLLLLLL#
#.LLLLLL.L
#.#LLLL.##`);
    });

    it("returns the expected state after three iterations ", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeats(initialState);

      subject.next();
      subject.next();
      const state = subject.next();

      expect(state).toEqual(`#.##.L#.##
#L###LL.L#
L.#.#..#..
#L##.##.L#
#.##.LL.LL
#.###L#.##
..#.#.....
#L######L#
#.LL###L.L
#.#L###.##`);
    });

    it("returns the expected state after four iterations ", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeats(initialState);

      subject.next();
      subject.next();
      subject.next();
      const state = subject.next();

      expect(state).toEqual(`#.#L.L#.##
#LLL#LL.L#
L.L.L..#..
#LLL.##.L#
#.LL.LL.LL
#.LL#L#.##
..L.L.....
#L#LLLL#L#
#.LLLLLL.L
#.#L#L#.##`);
    });

    it("returns the expected state after five iterations ", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeats(initialState);

      subject.next();
      subject.next();
      subject.next();
      subject.next();
      const state = subject.next();

      expect(state).toEqual(`#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##`);
    });
  });

  describe("#getOccupiedSeat", () => {
    it("returns 0 if there aren't any occupied seats", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeats(initialState);

      expect(subject.getOccupiedSeat()).toEqual(0);
    });

    it("returns 37 after 5 iterations", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeats(initialState);

      subject.next();
      subject.next();
      subject.next();
      subject.next();
      subject.next();

      expect(subject.getOccupiedSeat()).toEqual(37);
    });
  });
});
