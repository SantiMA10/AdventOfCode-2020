import { BoardPass } from "./BoardPass";

export const resolverPart1 = (input: string) => {
  return input
    .split("\n")
    .map((code) => new BoardPass(code).getSeatId())
    .reduce((max, seatId) => (max > seatId ? max : seatId), 0);
};

export const resolverPart2 = (input: string) => {
  const seats = input
    .split("\n")
    .map((code) => new BoardPass(code).getSeatId())
    .sort((a, b) => a - b);

  for (let i = 0; i < seats.length - 1; i++) {
    const seatPre = seats[i];
    const seatNext = seats[i + 1];

    if (seatNext - seatPre === 2) {
      return seatPre + 1;
    }
  }
};
