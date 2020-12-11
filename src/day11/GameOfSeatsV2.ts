import { GameOfSeats } from "./GameOfSeats";

export class GameOfSeatsV2 extends GameOfSeats {
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
          this.getNumberOfOccupiedAdjacent(i, j) >= 5
        ) {
          this.seats[i][j] = "L";
        }
      }
    }

    const output = this.seats.map((seats) => seats.join("")).join("\n");
    this.initialSeats = output.split("\n").map((state) => state.split(""));

    return output;
  }

  protected hasOccupiedSeatInTheSameRowAfter(
    row: number,
    column: number
  ): boolean {
    for (let i = column + 1; i < this.initialSeats[row].length; i++) {
      const currentSeat = this.initialSeats[row][i];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected hasOccupiedSeatInTheSameRowBefore(
    row: number,
    column: number
  ): boolean {
    for (let i = column - 1; i >= 0; i--) {
      const currentSeat = this.initialSeats[row][i];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected hasOccupiedSeatInTheSameColumnAfter(
    row: number,
    column: number
  ): boolean {
    for (let i = row + 1; i < this.initialSeats.length; i++) {
      const currentSeat = this.initialSeats[i][column];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected hasOccupiedSeatInTheSameColumnBefore(
    row: number,
    column: number
  ): boolean {
    for (let i = row - 1; i >= 0; i--) {
      const currentSeat = this.initialSeats[i][column];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected hasOccupiedSeatInTheSameMainDiagonalAfter(
    row: number,
    column: number
  ): boolean {
    for (let i = 1; i < this.initialSeats.length; i++) {
      const currentSeat = this.initialSeats?.[row + i]?.[column + i];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected hasOccupiedSeatInTheSameMainDiagonalBefore(
    row: number,
    column: number
  ): boolean {
    for (let i = 1; i < this.initialSeats.length; i++) {
      const currentSeat = this.initialSeats?.[row - i]?.[column - i];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected hasOccupiedSeatInTheSameSecondaryDiagonalAfter(
    row: number,
    column: number
  ): boolean {
    for (let i = 1; i < this.initialSeats.length; i++) {
      const currentSeat = this.initialSeats?.[row - i]?.[column + i];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected hasOccupiedSeatInTheSameSecondaryDiagonalBefore(
    row: number,
    column: number
  ): boolean {
    for (let i = 1; i < this.initialSeats.length; i++) {
      const currentSeat = this.initialSeats?.[row + i]?.[column - i];

      if (this.isOccupied(currentSeat)) {
        return true;
      }

      if (this.isFree(currentSeat)) {
        return false;
      }
    }

    return false;
  }

  protected getNumberOfOccupiedAdjacent(row: number, column: number): number {
    let occupied = 0;

    if (this.hasOccupiedSeatInTheSameRowAfter(row, column)) {
      occupied++;
    }

    if (this.hasOccupiedSeatInTheSameRowBefore(row, column)) {
      occupied++;
    }

    if (this.hasOccupiedSeatInTheSameColumnAfter(row, column)) {
      occupied++;
    }

    if (this.hasOccupiedSeatInTheSameColumnBefore(row, column)) {
      occupied++;
    }

    if (this.hasOccupiedSeatInTheSameMainDiagonalAfter(row, column)) {
      occupied++;
    }

    if (this.hasOccupiedSeatInTheSameMainDiagonalBefore(row, column)) {
      occupied++;
    }

    if (this.hasOccupiedSeatInTheSameSecondaryDiagonalAfter(row, column)) {
      occupied++;
    }

    if (this.hasOccupiedSeatInTheSameSecondaryDiagonalBefore(row, column)) {
      occupied++;
    }

    return occupied;
  }
}
