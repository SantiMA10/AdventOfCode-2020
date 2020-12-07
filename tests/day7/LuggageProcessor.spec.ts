import { LuggageProcessor } from "../../src/day7/LuggageProcessor";

describe("LuggageProcessor", () => {
  describe("#howManyCanContain", () => {
    it("returns 1 since only one type of bag can contain 'muted yellow' bags", async () => {
      const subject = new LuggageProcessor(
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        "bright white bags contain no other bags.",
        "muted yellow bags contain no other bags."
      );

      expect(subject.howManyCanContain("muted yellow")).toEqual(1);
    });

    it("returns 0 since no one type of bag can contain 'shiny gold' bags", async () => {
      const subject = new LuggageProcessor(
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        "bright white bags contain no other bags.",
        "muted yellow bags contain no other bags."
      );

      expect(subject.howManyCanContain("shiny gold")).toEqual(0);
    });

    it("returns 2 since two types of bag can contain 'shiny gold' bags", async () => {
      const subject = new LuggageProcessor(
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        "bright white bags contain no other bags.",
        "shiny gold bags contain no other bags.",
        "faded blue bags contain no other bags."
      );

      expect(subject.howManyCanContain("shiny gold")).toEqual(2);
    });

    it("returns 4 since four types of bag can contain 'shiny gold' bags", async () => {
      const subject = new LuggageProcessor(
        "light red bags contain 1 bright white bag, 2 muted yellow bags.",
        "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
        "bright white bags contain 1 shiny gold bag.",
        "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
        "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
        "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
        "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
        "faded blue bags contain no other bags.",
        "dotted black bags contain no other bags."
      );

      expect(subject.howManyCanContain("shiny gold")).toEqual(4);
    });
  });
});
