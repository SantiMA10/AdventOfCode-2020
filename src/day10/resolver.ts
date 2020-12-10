import { AdapterArray } from "./AdapterArray";

export const resolverPart1 = (input: string) => {
  return new AdapterArray(
    ...input.split("\n").map((i) => parseInt(i, 10))
  ).getNumberOfJoltsDifferences();
};
