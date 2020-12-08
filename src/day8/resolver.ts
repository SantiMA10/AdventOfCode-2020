import { Executor } from "./Executor";

export const resolverPart1 = (input: string) => {
  return new Executor(...input.split("\n")).run().acc;
};
