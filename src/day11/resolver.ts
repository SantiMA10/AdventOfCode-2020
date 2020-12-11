import { GameOfSeats } from "./GameOfSeats";

export const resolverPart1 = (input: string): number => {
  const subject = new GameOfSeats(input);

  let prev = "";
  let current = "";

  do {
    prev = current;
    current = subject.next();
  } while (prev !== current);

  return subject.getOccupiedSeat();
};
