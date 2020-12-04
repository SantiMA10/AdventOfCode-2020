import { Validator } from "./Validator";

export class EyeColorValidator extends Validator {
  public isValid(): boolean {
    return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(
      this.input
    );
  }
}
