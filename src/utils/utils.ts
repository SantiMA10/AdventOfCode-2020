import fs from "fs";

export const readFile = (path: string): string => {
  return fs.readFileSync(`${__dirname}/../../src/${path}`).toString();
};
