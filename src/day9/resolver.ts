import { XMASDecoder } from "./XMASDecoder";

export const resolverPart1 = (input: string) => {
  return new XMASDecoder({
    inputs: input.split("\n").map((i) => parseInt(i, 10)),
    preambleSize: 25,
  }).findFirstInvalidNumber();
};

export const resolverPart2 = (input: string) => {
  const decoder = new XMASDecoder({
    inputs: input.split("\n").map((i) => parseInt(i, 10)),
    preambleSize: 25,
  });

  return decoder.findSequence(decoder.findFirstInvalidNumber());
};
