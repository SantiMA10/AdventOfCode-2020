import { GameOfSeats } from "./GameOfSeats";
import { GameOfSeatsV2 } from "./GameOfSeatsV2";

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

export const resolverPart2 = (input: string): number => {
  const subject = new GameOfSeatsV2(input);

  let prev = "";
  let current = "";

  do {
    prev = current;
    current = subject.next();
  } while (prev !== current);

  return subject.getOccupiedSeat();
};
