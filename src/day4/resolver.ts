import { Passport } from "./Passport";

export const resolverPart1 = (input: string): number => {
  return (input.match(/((\w{3}:\S+)(\s|$))+/gm) || [])
    .map((passportInfo) => {
      return new Passport(passportInfo).isValid();
    })
    .filter((isValid) => isValid).length;
};
