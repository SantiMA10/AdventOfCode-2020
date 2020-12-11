import { GameOfSeatsV2 } from "../../src/day11/GameOfSeatsV2";
import { readFile } from "../../src/utils/utils";

describe("GameOfSeatsV2", () => {
  describe("#next", () => {
    it("returns the expected next state", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeatsV2(initialState);

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

    it("returns the expected next state", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeatsV2(initialState);

      subject.next();
      const state = subject.next();

      expect(state).toEqual(`#.LL.LL.L#
#LLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLL#
#.LLLLLL.L
#.LLLLL.L#`);
    });

    it("returns the expected next state", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeatsV2(initialState);

      subject.next();
      subject.next();
      const state = subject.next();

      expect(state).toEqual(`#.L#.##.L#
#L#####.LL
L.#.#..#..
##L#.##.##
#.##.#L.##
#.#####.#L
..#.#.....
LLL####LL#
#.L#####.L
#.L####.L#`);
    });

    it("returns the expected next state", async () => {
      const initialState = readFile("day11/test.txt");
      const subject = new GameOfSeatsV2(initialState);

      subject.next();
      subject.next();
      subject.next();
      const state = subject.next();

      expect(state).toEqual(`#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##LL.LL.L#
L.LL.LL.L#
#.LLLLL.LL
..L.L.....
LLLLLLLLL#
#.LLLLL#.L
#.L#LL#.L#`);
    });
  });
});
