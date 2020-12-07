export class LuggageProcessor {
  private rules: string[];

  public constructor(...rules: string[]) {
    this.rules = rules;
  }

  public howManyCanContain(color: string): number {
    const parsedRules: Record<string, string[]> = this.rules.reduce(
      (ac, rule) => {
        const [color, bagsThatContains] = rule.split(" bags contain ");

        if (bagsThatContains.includes("no other bags.")) {
          ac[color] = [];
          return ac;
        }

        ac[color] = bagsThatContains.split(", ").map((bags) => {
          const [_, colorPart1, colorPart2] = bags.split(" ");

          return `${colorPart1} ${colorPart2}`;
        });

        return ac;
      },
      {} as Record<string, string[]>
    );

    return Object.keys(parsedRules).filter((key) => {
      return this.canContains(parsedRules, key, color);
    }).length;
  }

  private canContains(
    rules: Record<string, string[]>,
    actualBag: string,
    color: string
  ): boolean {
    if (rules[actualBag].length === 0 || actualBag === color) {
      return false;
    }

    if (rules[actualBag].includes(color)) {
      return true;
    }

    return rules[actualBag].some((bag) => this.canContains(rules, bag, color));
  }
}
