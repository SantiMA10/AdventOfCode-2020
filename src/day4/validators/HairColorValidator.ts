import { Validator } from "./Validator";

export class HairColorValidator extends Validator {
  public isValid(): boolean {
    return /^#\S{6}$/.test(this.input);
  }
}
