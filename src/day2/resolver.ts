export const minMaxLetterRule = (passwordEntry: string): boolean => {
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

export const letterPositionRule = (passwordEntry: string): boolean => {
  const [rule, password] = passwordEntry.split(": ");
  const [coordinates, letter] = rule.split(" ");
  const [position1, position2] = coordinates
    .split("-")
    .map((a) => parseInt(a, 10))
    // Toboggan Corporate Policies have no concept of "index zero"!
    .map((a) => a - 1);

  return !!(
    (password[position1] === letter ? 1 : 0) ^
    (password[position2] === letter ? 1 : 0)
  );
};

export const resolver = (
  input: string,
  rule: (passwordEntry: string) => boolean
) => {
  const passwords = input.split("\n").map(rule);

  return passwords.filter((password) => password).length;
};
