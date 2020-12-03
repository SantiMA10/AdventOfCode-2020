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

const treesCalculator = (
  forest: Forest,
  slope: { right: number; down: number }
) => {
  return new Array(forest.limit() - 1)
    .fill(null)
    .map((_, i) => {
      const x = 1 + (i + 1) * slope.right;
      const y = 1 + (i + 1) * slope.down;

      return forest.isTree(x, y);
    })
    .filter((hasTree) => hasTree).length;
};

export const resolverPart2 = (forest: Forest) => {
  return [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ]
    .map((slope) => {
      return treesCalculator(forest, slope);
    })
    .reduce((acc, trees) => acc * trees, 1);
};
