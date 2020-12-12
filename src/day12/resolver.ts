import { FerryNavigator } from "./FerryNavigator";
import { WaypointCalculator } from "./WaypointCalculator";

export const resolverPart1 = (input: string) => {
  return new FerryNavigator({
    facing: "E",
    instructions: input.split("\n"),
  }).getManhattanDistance();
};

export const resolverPart2 = (input: string) => {
  return new WaypointCalculator({
    east: 10,
    north: 1,
    instructions: input.split("\n"),
  }).getManhattanDistance();
};
