export class BoardPass {
  public constructor(protected code: string) {}

  public getRow(): number {
    const [rowCode] = this.code.match(/\S{7}/) || [];

    return rowCode.split("").reduce(
      (row, letter) => {
        if (letter === "F") {
          return {
            min: row.min,
            max: Math.trunc(row.max - (row.max - row.min) / 2),
          };
        }

        return {
          min: Math.trunc(row.max - (row.max - row.min) / 2),
          max: row.max,
        };
      },
      { min: 0, max: 127 }
    ).max;
  }

  public getColumn(): number {
    const [columnCode] = this.code.match(/.{3}$/) || [];

    return columnCode.split("").reduce(
      (column, letter) => {
        if (letter === "L") {
          return {
            min: column.min,
            max: Math.trunc(column.max - (column.max - column.min) / 2),
          };
        }

        return {
          min: Math.trunc(column.max - (column.max - column.min) / 2),
          max: column.max,
        };
      },
      { min: 0, max: 7 }
    ).max;
  }

  public getSeatId(): number {
    return this.getRow() * 8 + this.getColumn();
  }
}
