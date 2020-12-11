export class GameOfSeats {
  protected initialSeats: string[][];
  protected seats: string[][];

  public constructor(state: string) {
    this.seats = state.split("\n").map((state) => state.split(""));
    this.initialSeats = state.split("\n").map((state) => state.split(""));
  }

  public next(): string {
    for (let i = 0; i < this.seats.length; i++) {
      for (let j = 0; j < this.seats[i].length; j++) {
        const currentSeat = this.seats[i][j];

        if (this.isFloor(currentSeat)) {
          // nothing to do
        }

        if (
          this.isFree(currentSeat) &&
          this.getNumberOfOccupiedAdjacent(i, j) === 0
        ) {
          this.seats[i][j] = "#";
        }

        if (
          this.isOccupied(currentSeat) &&
          this.getNumberOfOccupiedAdjacent(i, j) >= 4
        ) {
          this.seats[i][j] = "L";
        }
      }
    }

    const output = this.seats.map((seats) => seats.join("")).join("\n");
    this.initialSeats = output.split("\n").map((state) => state.split(""));

    return output;
  }

  protected isFloor(seat: string): boolean {
    return seat === ".";
  }

  protected isFree(seat: string): boolean {
    return seat === "L";
  }

  protected isOccupied(seat: string): boolean {
    return seat === "#";
  }

  protected getNumberOfOccupiedAdjacent(row: number, column: number): number {
    const coords = [-1, 0, 1];
    let occupied = 0;

    for (let a of coords) {
      for (let b of coords) {
        const adjacentSeat = this.initialSeats?.[row + a]?.[column + b];

        if (this.isOccupied(adjacentSeat) && !(a === 0 && b === 0)) {
          occupied++;
        }
      }
    }

    return occupied;
  }

  public getOccupiedSeat(): number {
    return this.seats
      .map((seats) => seats.join(""))
      .join("\n")
      .split("")
      .reduce((occupied, seat) => {
        if (this.isOccupied(seat)) {
          return occupied + 1;
        }

        return occupied;
      }, 0);
  }
}
