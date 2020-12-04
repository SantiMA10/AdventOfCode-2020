import { Validator } from "./Validator";

export class PassportIdValidator extends Validator {
  public isValid(): boolean {
    return /^\d{9}$/.test(this.input);
  }
}
