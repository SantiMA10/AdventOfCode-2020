import { Validator } from "./Validator";

export class HeightValidator extends Validator {
  public isValid(): boolean {
    const [number] = this.input.match(/\d{2,3}/gm) || [];

    if (this.input.includes("cm")) {
      return parseInt(number) >= 150 && parseInt(number) <= 193;
    }

    return parseInt(number) >= 59 && parseInt(number) <= 76;
  }
}
