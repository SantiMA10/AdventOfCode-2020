export class BirthYearValidator {
  public constructor(private year: string) {}

  public isValid() {
    return parseInt(this.year) >= 1920 && parseInt(this.year) <= 2002;
  }
}
