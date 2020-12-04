import { Passport } from "../../src/day4/Passport";
import { resolverPart1, resolverPart2 } from "../../src/day4/resolver";
import { BirthYearValidator } from "../../src/day4/validators/BirthYearValidator";
import { ExpirationYearValidator } from "../../src/day4/validators/ExpirationYearValidator";
import { EyeColorValidator } from "../../src/day4/validators/EyeColorValidator";
import { HairColorValidator } from "../../src/day4/validators/HairColorValidator";
import { HeightValidator } from "../../src/day4/validators/HeightValidator";
import { IssueYearValidator } from "../../src/day4/validators/IssueYearValidator";
import { PassportIdValidator } from "../../src/day4/validators/PassportIdValidator";
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

  describe("part 2", () => {
    describe("validators", () => {
      describe("BirthYearValidator", () => {
        it("returns valid if the year has four digits", async () => {
          const subject = new BirthYearValidator("2002");

          expect(subject.isValid()).toEqual(true);
        });

        it("returns invalid if the year has less than 4 digits", async () => {
          const subject = new BirthYearValidator("200");

          expect(subject.isValid()).toEqual(false);
        });

        it("returns invalid if the year is greater than 2002", async () => {
          const subject = new BirthYearValidator("2003");

          expect(subject.isValid()).toEqual(false);
        });

        it("returns invalid if the year is lower than 1920", async () => {
          const subject = new BirthYearValidator("1919");

          expect(subject.isValid()).toEqual(false);
        });
      });

      describe("IssueYearValidator", () => {
        it("returns valid if the year has four digits", async () => {
          const subject = new IssueYearValidator("2020");

          expect(subject.isValid()).toEqual(true);
        });

        it("returns invalid if the year has less than 4 digits", async () => {
          const subject = new IssueYearValidator("200");

          expect(subject.isValid()).toEqual(false);
        });

        it("returns invalid if the year is greater than 2020", async () => {
          const subject = new IssueYearValidator("2022");

          expect(subject.isValid()).toEqual(false);
        });

        it("returns invalid if the year is lower than 2010", async () => {
          const subject = new IssueYearValidator("2009");

          expect(subject.isValid()).toEqual(false);
        });
      });

      describe("ExpirationYearValidator", () => {
        it("returns valid if the year has four digits", async () => {
          const subject = new ExpirationYearValidator("2020");

          expect(subject.isValid()).toEqual(true);
        });

        it("returns invalid if the year has less than 4 digits", async () => {
          const subject = new ExpirationYearValidator("200");

          expect(subject.isValid()).toEqual(false);
        });

        it("returns invalid if the year is greater than 2030", async () => {
          const subject = new ExpirationYearValidator("2032");

          expect(subject.isValid()).toEqual(false);
        });

        it("returns invalid if the year is lower than 2020", async () => {
          const subject = new ExpirationYearValidator("2019");

          expect(subject.isValid()).toEqual(false);
        });
      });

      describe("HeightValidator", () => {
        describe("using cm", () => {
          it("returns invalid if the number is lower than 150", async () => {
            const subject = new HeightValidator("149cm");

            expect(subject.isValid()).toEqual(false);
          });

          it("returns valid if the number is between 150 and 193", async () => {
            const subject = new HeightValidator("150cm");

            expect(subject.isValid()).toEqual(true);
          });

          it("returns invalid if the number is grater than 193", async () => {
            const subject = new HeightValidator("194cm");

            expect(subject.isValid()).toEqual(false);
          });
        });

        describe("using in", () => {
          it("returns invalid if the number is lower than 59", async () => {
            const subject = new HeightValidator("58in");

            expect(subject.isValid()).toEqual(false);
          });

          it("returns valid if the number is between 59 and 76", async () => {
            const subject = new HeightValidator("76in");

            expect(subject.isValid()).toEqual(true);
          });
        });
      });

      describe("HairColorValidator", () => {
        it("is valid if is a # followed by exactly six characters 0-9 or a-f", async () => {
          const subject = new HairColorValidator("#123abc");

          expect(subject.isValid()).toEqual(true);
        });

        it("is invalid if is a # followed by more than six characters 0-9 or a-f", async () => {
          const subject = new HairColorValidator("#123abcc");

          expect(subject.isValid()).toEqual(false);
        });

        it("is invalid because it missed the initial #", async () => {
          const subject = new HairColorValidator("123abcc");

          expect(subject.isValid()).toEqual(false);
        });
      });

      describe("EyeColorValidator", () => {
        it("returns valid if is one of the list: amb, blu, brn, gry, grn, hzl or oth", async () => {
          const subject = new EyeColorValidator("amb");

          expect(subject.isValid()).toEqual(true);
        });

        it("returns invalid if is not one of the list: amb, blu, brn, gry, grn, hzl or oth", async () => {
          const subject = new EyeColorValidator("pep");

          expect(subject.isValid()).toEqual(false);
        });
      });

      describe("PassportIdValidator", () => {
        it("returns valid if it is a nine-digit number, including leading zeroes.", async () => {
          const subject = new PassportIdValidator("000000001");

          expect(subject.isValid()).toEqual(true);
        });

        it("returns invalid if it is not a nine-digit number, including leading zeroes.", async () => {
          const subject = new PassportIdValidator("0123456789");

          expect(subject.isValid()).toEqual(false);
        });
      });
    });

    describe("resolverPart2", () => {
      it("returns that all the passports are valid", async () => {
        const input = readFile("day4/test-valid.txt");

        expect(resolverPart2(input)).toEqual(4);
      });

      it("returns that all the passports are invalid", async () => {
        const input = readFile("day4/test-invalid.txt");

        expect(resolverPart2(input)).toEqual(0);
      });

      it("returns the number of valid passports in the problem input", async () => {
        const input = readFile("day4/input.txt");

        expect(resolverPart2(input)).toEqual(123);
      });
    });
  });
});
