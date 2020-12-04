export abstract class Validator {
  public constructor(protected input: string) {}

  public abstract isValid(): boolean;
}
