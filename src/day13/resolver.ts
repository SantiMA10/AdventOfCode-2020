import { ShuttleSearch } from "./ShuttleSearch";

export const resolverPart1 = (input: string) => {
  const [timestamp, buses] = input.split("\n") || [];

  const search = new ShuttleSearch({
    timestamp: parseInt(timestamp, 10),
    busses: buses.split(","),
  });

  return search.getBusId() * search.getWaitingTime();
};
