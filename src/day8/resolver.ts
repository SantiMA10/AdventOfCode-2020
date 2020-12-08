import { AutoFixExecutor } from "./AutoFixExecutor";
import { Executor } from "./Executor";

export const resolverPart1 = (input: string) => {
  return new Executor(...input.split("\n")).run().acc;
};

export const resolverPart2 = (input: string) => {
  return new AutoFixExecutor(...input.split("\n")).run().acc;
};
