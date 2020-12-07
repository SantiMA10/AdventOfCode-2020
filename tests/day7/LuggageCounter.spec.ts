import { LuggageCounter } from "../../src/day7/LuggageCounter";

describe("LuggageCounter", () => {
  describe("#count", () => {
    it("returns the number of bags inside our shiny gold", async () => {
      const subject = new LuggageCounter(
        "shiny gold bags contain 2 dark red bags.",
        "dark red bags contain 2 dark orange bags.",
        "dark orange bags contain 2 dark yellow bags.",
        "dark yellow bags contain 2 dark green bags.",
        "dark green bags contain 2 dark blue bags.",
        "dark blue bags contain 2 dark violet bags.",
        "dark violet bags contain no other bags."
      );

      expect(subject.count("shiny gold")).toEqual(126);
    });

    it("returns the number of bags inside our shiny gold", async () => {
      const subject = new LuggageCounter(
        "shiny gold bags contain 1 dark olive bags, 2 vibrant plum bags.",
        "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
        "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
        "dotted black bags contain no other bags.",
        "faded blue bags contain no other bags."
      );

      expect(subject.count("shiny gold")).toEqual(32);
    });
  });
});
