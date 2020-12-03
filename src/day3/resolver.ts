import { Forest } from "./Forest";

export const resolverPart1 = (forest: Forest) => {
  return new Array(forest.limit() - 1)
    .fill(null)
    .map((_, i) => {
      const x = 1 + (i + 1) * 3;
      const y = 1 + (i + 1);

      return forest.isTree(x, y);
    })
    .filter((hasTree) => hasTree).length;
};
