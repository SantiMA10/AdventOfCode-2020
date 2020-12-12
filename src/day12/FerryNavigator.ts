interface Options {
  facing: "N" | "S" | "E" | "W";
  instructions: string[];
}

export class FerryNavigator {
  private facing: Options["facing"];
  private instructions: Options["instructions"];

  private east: number;
  private west: number;
  private north: number;
  private south: number;

  public constructor({ facing, instructions }: Options) {
    this.facing = facing;
    this.instructions = instructions;

    this.east = 0;
    this.west = 0;
    this.north = 0;
    this.south = 0;
  }

  public getManhattanDistance(): number {
    this.instructions.forEach((instruction) => {
      const [action] = instruction.match(/.{1}/) || [];
      const [distance] = instruction.match(/\d+/) || [];

      switch (action) {
        case "E":
        case "W":
        case "N":
        case "S":
          this.move(action, parseInt(distance));
          break;
        case "R":
        case "L":
          this.changeFacing(action, parseInt(distance));
          break;
        case "F":
          this.move(this.facing, parseInt(distance));
          break;
      }
    });

    return Math.abs(this.east - this.west) + Math.abs(this.north - this.south);
  }

  private changeFacing(action: string, degrees: number): void {
    const rCoords: ["N", "E", "S", "W"] = ["N", "E", "S", "W"];
    const lCoords: ["N", "W", "S", "E"] = ["N", "W", "S", "E"];
    const moves = degrees / 90;

    switch (action) {
      case "R":
        const rPosition = rCoords.indexOf(this.facing);

        this.facing = rCoords[(moves + rPosition) % 4];
        break;
      case "L":
        const lPosition = lCoords.indexOf(this.facing);

        this.facing = lCoords[(moves + lPosition) % 4];
        break;
    }
  }

  private move(action: string, distance: number): void {
    switch (action) {
      case "E":
        this.east += distance;
        break;
      case "W":
        this.west += distance;
        break;
      case "N":
        this.north += distance;
        break;
      case "S":
        this.south += distance;
        break;
    }
  }
}
