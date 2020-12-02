export const resolverPart1 = (input: string) => {
  const expenses = input.split("\n").map((n) => parseInt(n, 10));

  return expenses
    .map((expense1) => {
      return expenses
        .map((expense2) => {
          if (expense1 + expense2 === 2020) {
            return expense1 * expense2;
          }
        })
        .filter((sum) => !!sum);
    })
    .flat()
    .filter((sum) => !!sum)[0];
};

export const resolverPart2 = (input: string) => {
  const expenses = input.split("\n").map((n) => parseInt(n, 10));

  return expenses
    .map((expense1) => {
      return expenses
        .map((expense2) => {
          return expenses.map((expense3) => {
            if (expense1 + expense2 + expense3 === 2020) {
              return expense1 * expense2 * expense3;
            }
          });
        })
        .flat()
        .filter((sum) => !!sum);
    })
    .flat()
    .filter((sum) => !!sum)[0];
};
