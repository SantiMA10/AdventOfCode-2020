import { BusContest } from "./BusContest";
import { ShuttleSearch } from "./ShuttleSearch";

export const resolverPart1 = (input: string) => {
  const [timestamp, busses] = input.split("\n") || [];

  const search = new ShuttleSearch({
    timestamp: parseInt(timestamp, 10),
    busses: busses.split(","),
  });

  return search.getBusId() * search.getWaitingTime();
};

export const resolverPart2 = (input: string) => {
  const [_, busses] = input.split("\n") || [];

  const contest = new BusContest({
    busses: busses.split(","),
  });

  return contest.getMagicTimestamp();
};
