import { BoardPass } from "../../src/day5/BoardPass";

describe("BoardPass", () => {
  describe("#getRow", () => {
    it("returns row 44 with FBFBBFFRLR", async () => {
      const subject = new BoardPass("FBFBBFFRLR");

      expect(subject.getRow()).toEqual(44);
    });

    it("returns row 70 with BFFFBBFRRR", async () => {
      const subject = new BoardPass("BFFFBBFRRR");

      expect(subject.getRow()).toEqual(70);
    });

    it("returns row 14 with FFFBBBFRRR", async () => {
      const subject = new BoardPass("FFFBBBFRRR");

      expect(subject.getRow()).toEqual(14);
    });

    it("returns row 102 with BBFFBBFRLL", async () => {
      const subject = new BoardPass("BBFFBBFRLL");

      expect(subject.getRow()).toEqual(102);
    });
  });

  describe("#getColumn", () => {
    it("returns column 5 with FBFBBFFRLR", async () => {
      const subject = new BoardPass("FBFBBFFRLR");

      expect(subject.getColumn()).toEqual(5);
    });

    it("returns column 7 with BFFFBBFRRR", async () => {
      const subject = new BoardPass("BFFFBBFRRR");

      expect(subject.getColumn()).toEqual(7);
    });

    it("returns column 7 with FFFBBBFRRR", async () => {
      const subject = new BoardPass("FFFBBBFRRR");

      expect(subject.getColumn()).toEqual(7);
    });

    it("returns column 4 with BBFFBBFRLL", async () => {
      const subject = new BoardPass("BBFFBBFRLL");

      expect(subject.getColumn()).toEqual(4);
    });
  });

  describe("#getSeatId", () => {
    it("returns seat id 357 with FBFBBFFRLR", async () => {
      const subject = new BoardPass("FBFBBFFRLR");

      expect(subject.getSeatId()).toEqual(357);
    });

    it("returns seat id 567 with BFFFBBFRRR", async () => {
      const subject = new BoardPass("BFFFBBFRRR");

      expect(subject.getSeatId()).toEqual(567);
    });

    it("returns seat id 119 with FFFBBBFRRR", async () => {
      const subject = new BoardPass("FFFBBBFRRR");

      expect(subject.getSeatId()).toEqual(119);
    });

    it("returns seat id 820 with BBFFBBFRLL", async () => {
      const subject = new BoardPass("BBFFBBFRLL");

      expect(subject.getSeatId()).toEqual(820);
    });
  });
});
