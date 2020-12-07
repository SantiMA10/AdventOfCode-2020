import { LuggageProcessor } from "./LuggageProcessor";

export const resolverPart1 = (input: string) => {
  const processor = new LuggageProcessor(...input.split("\n"));

  return processor.howManyCanContain("shiny gold");
};
