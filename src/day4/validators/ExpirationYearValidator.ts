export class ExpirationYearValidator {
  public constructor(private year: string) {}

  public isValid() {
    return parseInt(this.year) >= 2020 && parseInt(this.year) <= 2030;
  }
}
