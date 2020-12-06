export const resolverPart1 = (input: string): number => {
  return input
    .split("\n")
    .reduce(
      (ac: string[][], group: string) => {
        if (group === "") {
          ac.push([]);
          return ac;
        }

        const actualGroup = ac.length - 1;
        ac[actualGroup].push(...group.split(""));

        return ac;
      },
      [[]]
    )
    .map((group) => {
      return Array.from(new Set(group));
    })
    .reduce((ac, group) => ac + group.length, 0);
};

export const resolverPart2 = (input: string): number => {
  return input
    .split("\n")
    .reduce(
      (ac: string[][][], group: string) => {
        if (group === "") {
          ac.push([]);
          return ac;
        }

        const actualGroup = ac.length - 1;
        ac[actualGroup].push(group.split("") as string[]);

        return ac;
      },
      [[]] as string[][][]
    )
    .map((group) => {
      const personsInTheGroup = group.length;
      const answers = group.flat().reduce((acc, answers: string) => {
        if (!acc[answers]) {
          acc[answers] = 1;
          return acc;
        }

        acc[answers] = acc[answers] + 1;

        return acc;
      }, {} as Record<string, number>);

      return Object.keys(answers).filter(
        (key) => answers[key] === personsInTheGroup
      ).length;
    })
    .reduce((ac, group) => ac + group, 0);
};
