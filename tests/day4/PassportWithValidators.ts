import { Passport } from "../../src/day4/Passport";
import { BirthYearValidator } from "../../src/day4/validators/BirthYearValidator";
import { ExpirationYearValidator } from "../../src/day4/validators/ExpirationYearValidator";
import { EyeColorValidator } from "../../src/day4/validators/EyeColorValidator";
import { HairColorValidator } from "../../src/day4/validators/HairColorValidator";
import { HeightValidator } from "../../src/day4/validators/HeightValidator";
import { IssueYearValidator } from "../../src/day4/validators/IssueYearValidator";
import { PassportIdValidator } from "../../src/day4/validators/PassportIdValidator";

export class PassportWithValidators extends Passport {
  public isValid(): boolean {
    return (
      super.isValid() &&
      this.fields.every((field) => {
        let [fieldName, filedValue] = field.split(":");
        filedValue = filedValue.trim().replace("\n", "");

        switch (fieldName) {
          case "byr":
            return new BirthYearValidator(filedValue).isValid();
          case "iyr":
            return new IssueYearValidator(filedValue).isValid();
          case "eyr":
            return new ExpirationYearValidator(filedValue).isValid();
          case "hgt":
            return new HeightValidator(filedValue).isValid();
          case "hcl":
            return new HairColorValidator(filedValue).isValid();
          case "ecl":
            return new EyeColorValidator(filedValue).isValid();
          case "pid":
            return new PassportIdValidator(filedValue).isValid();
          case "cid":
            return true;
        }
      }) &&
      this.fields.length >= 7
    );
  }
}
