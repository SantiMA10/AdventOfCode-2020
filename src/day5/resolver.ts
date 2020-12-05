import { BoardPass } from "./BoardPass";

export const resolverPart1 = (input: string) => {
  return input
    .split("\n")
    .map((code) => new BoardPass(code).getSeatId())
    .reduce((max, seatId) => (max > seatId ? max : seatId), 0);
};
