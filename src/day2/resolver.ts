export const validatePassword = (passwordEntry: string) => {
  const [rule, password] = passwordEntry.split(": ");
  const [minMax, letter] = rule.split(" ");
  const [min, max] = minMax.split("-");

  const letterMap: Record<string, number> = password
    .split("")
    .reduce((map: Record<string, number>, letter: string) => {
      if (!!map[letter]) {
        map[letter] = map[letter] + 1;
        return map;
      }

      map[letter] = 1;

      return map;
    }, {});

  return (
    letterMap[letter] >= parseInt(min) && letterMap[letter] <= parseInt(max)
  );
};

export const resolver = (
  input: string,
  rule: (passwordEntry: string) => boolean
) => {
  const passwords = input.split("\n").map(rule);

  return passwords.filter((password) => password).length;
};
