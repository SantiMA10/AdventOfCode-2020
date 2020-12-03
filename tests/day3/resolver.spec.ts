import { Forest } from "../../src/day3/Forest";
import { resolverPart1, resolverPart2 } from "../../src/day3/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 3", () => {
  describe("part 1", () => {
    describe("Forest", () => {
      describe("#isTree", () => {
        it("returns true if the (1,1) contains a tree", async () => {
          const forest = new Forest(`#.
..`);

          expect(forest.isTree(1, 1)).toEqual(true);
        });

        it("returns false if the (1,1) not contains a tree", async () => {
          const forest = new Forest(`..
..`);

          expect(forest.isTree(1, 1)).toEqual(false);
        });

        it("returns true if the (3,2) contains a tree", async () => {
          const forest = new Forest(`..
#.`);

          expect(forest.isTree(3, 2)).toEqual(true);
        });

        it("returns false if the (1,3) not contains a tree, because is out of bounds", async () => {
          const forest = new Forest(`..
#.`);

          expect(forest.isTree(1, 3)).toEqual(false);
        });
      });
    });

    describe("#resolverPart1", () => {
      it("returns the number of trees in the test input", async () => {
        const input = readFile("day3/test.txt");

        expect(resolverPart1(new Forest(input))).toEqual(7);
      });

      it("returns the number of trees in the problem input", async () => {
        const input = readFile("day3/input.txt");

        expect(resolverPart1(new Forest(input))).toEqual(225);
      });
    });
  });

  describe("part 2", () => {
    describe("#resolverPart2", () => {
      it("returns the number of trees in the test input", async () => {
        const input = readFile("day3/test.txt");

        expect(resolverPart2(new Forest(input))).toEqual(336);
      });

      it("returns the number of trees in the problem input", async () => {
        const input = readFile("day3/input.txt");

        expect(resolverPart2(new Forest(input))).toEqual(1115775000);
      });
    });
  });
});
