export const resolverPart1 = (input: string): number => {
  return input
    .split("\n")
    .reduce(
      (ac: string[][], group: string) => {
        if (group === "") {
          ac.push([] as string[]);
          return ac;
        }

        const actualGroup = ac.length - 1;
        ac[actualGroup].push(...group.split(""));
        ac[actualGroup] = ac[actualGroup].flat();

        return ac;
      },
      [[]] as string[][]
    )
    .map((group) => {
      return Array.from(new Set(group));
    })
    .reduce((ac, group) => ac + group.length, 0);
};
