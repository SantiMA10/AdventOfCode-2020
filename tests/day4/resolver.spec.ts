import { Passport } from "../../src/day4/Passport";
import { resolverPart1 } from "../../src/day4/resolver";
import { readFile } from "../../src/utils/utils";

describe("day 4", () => {
  describe("part 1", () => {
    describe("regex", () => {
      it("returns 4 passports", async () => {
        const input = readFile("day4/test.txt");

        expect(input.match(/((\w{3}:\S+)(\s|$))+/gm)).toMatchSnapshot();
      });
    });

    describe("Passport", () => {
      it("returns valid if the passport has the 8 fields", async () => {
        const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm
`;
        const subject = new Passport(input);

        expect(subject.isValid()).toEqual(true);
      });

      it("returns invalid if the passport is missing 'hgt'", async () => {
        const input = `iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929
`;
        const subject = new Passport(input);

        expect(subject.isValid()).toEqual(false);
      });

      it("returns valid if the passport is missing only 'cid'", async () => {
        const input = `hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm
`;
        const subject = new Passport(input);

        expect(subject.isValid()).toEqual(true);
      });

      it("returns invalid if the passport is missing 'cid' and 'byr'", async () => {
        const input = `hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;
        const subject = new Passport(input);

        expect(subject.isValid()).toEqual(false);
      });
    });

    describe("resolverPart1", () => {
      it("returns the number of valid passports in the test input", async () => {
        const input = readFile("day4/test.txt");

        expect(resolverPart1(input)).toEqual(2);
      });

      it("returns the number of valid passports in the problem input", async () => {
        const input = readFile("day4/input.txt");

        expect(resolverPart1(input)).toEqual(206);
      });
    });
  });
});
