import { LuggageCounter } from "./LuggageCounter";
import { LuggageProcessor } from "./LuggageProcessor";

export const resolverPart1 = (input: string) => {
  const processor = new LuggageProcessor(...input.split("\n"));

  return processor.howManyCanContain("shiny gold");
};

export const resolverPart2 = (input: string) => {
  const processor = new LuggageCounter(...input.split("\n"));

  return processor.count("shiny gold");
};
