export class LuggageCounter {
  private rules: Record<string, { color: string; count: number }[]>;

  public constructor(...rules: string[]) {
    this.rules = rules.reduce((ac, rule) => {
      const [color, bagsThatContains] = rule.split(" bags contain ");

      if (bagsThatContains.includes("no other bags.")) {
        ac[color] = [];
        return ac;
      }

      ac[color] = bagsThatContains.split(", ").map((bags) => {
        const [count, colorPart1, colorPart2] = bags.split(" ");

        return { color: `${colorPart1} ${colorPart2}`, count: parseInt(count) };
      });

      return ac;
    }, {} as Record<string, { color: string; count: number }[]>);
  }

  public count(color: string): number {
    const rules = this.rules[color];

    return rules.reduce((sum, rule) => {
      const { color, count } = rule;
      const colorCount = this.count(color);

      return count * colorCount + sum + count;
    }, 0);
  }
}
