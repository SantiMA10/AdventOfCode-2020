import { FerryNavigator } from "./FerryNavigator";

export const resolverPart1 = (input: string) => {
  return new FerryNavigator({
    facing: "E",
    instructions: input.split("\n"),
  }).getManhattanDistance();
};
