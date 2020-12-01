export const resolverPart1 = (input: string) => {
  const expenses = input.split("\n").map((n) => parseInt(n, 10));

  for (let i = 0; i < expenses.length; i++) {
    for (let j = 0; j < expenses.length; j++) {
      if (expenses[i] + expenses[j] === 2020) {
        return expenses[i] * expenses[j];
      }
    }
  }
};

export const resolverPart2 = (input: string) => {
  const expenses = input.split("\n").map((n) => parseInt(n, 10));

  for (let i = 0; i < expenses.length; i++) {
    for (let j = 0; j < expenses.length; j++) {
      for (let k = 0; k < expenses.length; k++) {
        if (expenses[i] + expenses[j] + expenses[k] === 2020) {
          return expenses[i] * expenses[j] * expenses[k];
        }
      }
    }
  }
};
