export class Passport {
  protected fields: string[];

  public constructor(input: string) {
    this.fields = input.match(/((\w{3}:\S+)(\s|$))/gm) || [];
  }

  public isValid() {
    if (this.fields.length === 8) {
      return true;
    }

    return (
      this.fields.every((field) =>
        ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].includes(
          field.split(":")[0]
        )
      ) && this.fields.length === 7
    );
  }
}
