import fs from "fs";

export const readFile = (path: string): string => {
  return fs.readFileSync(path).toString();
};
