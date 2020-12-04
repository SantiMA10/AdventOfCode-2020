export class IssueYearValidator {
  public constructor(private year: string) {}

  public isValid() {
    return parseInt(this.year) >= 2010 && parseInt(this.year) <= 2020;
  }
}
