interface Options {
  instructions: string[];
  east: number;
  north: number;
}

export class WaypointCalculator {
  private instructions: Options["instructions"];

  private waypoint: {
    east: number;
    west: number;
    north: number;
    south: number;
  };

  private ferry: {
    east: number;
    west: number;
    north: number;
    south: number;
  };

  public constructor({ instructions, north, east }: Options) {
    this.instructions = instructions;

    this.waypoint = { east, north, west: 0, south: 0 };
    this.ferry = { east: 0, north: 0, west: 0, south: 0 };
  }

  public getManhattanDistance(): number {
    this.instructions.forEach((instruction) => {
      const [action] = instruction.match(/.{1}/) || [];
      const [distance] = instruction.match(/\d+/) || [];

      switch (action) {
        case "N":
          this.waypoint = {
            ...this.waypoint,
            north: this.waypoint.north + parseInt(distance, 10),
          };
          break;
        case "S":
          this.waypoint = {
            ...this.waypoint,
            south: this.waypoint.south + parseInt(distance, 10),
          };
          break;
        case "W":
          this.waypoint = {
            ...this.waypoint,
            west: this.waypoint.west + parseInt(distance, 10),
          };
          break;
        case "E":
          this.waypoint = {
            ...this.waypoint,
            east: this.waypoint.east + parseInt(distance, 10),
          };
          break;
        case "F":
          this.ferry = {
            east: this.ferry.east + this.waypoint.east * parseInt(distance, 10),
            north:
              this.ferry.north + this.waypoint.north * parseInt(distance, 10),
            south:
              this.ferry.south + this.waypoint.south * parseInt(distance, 10),
            west: this.ferry.west + this.waypoint.west * parseInt(distance, 10),
          };
          break;
        case "L":
        case "R":
          this.rotateWaypoint(action, parseInt(distance, 10));
          break;
      }
    });

    return (
      Math.abs(this.ferry.east - this.ferry.west) +
      Math.abs(this.ferry.north - this.ferry.south)
    );
  }

  private rotateWaypoint(action: string, degrees: number): void {
    const moves = degrees / 90;

    switch (action) {
      case "R":
        for (let i = 0; i < moves; i++) {
          this.waypoint = {
            east: this.waypoint.north,
            north: this.waypoint.west,
            south: this.waypoint.east,
            west: this.waypoint.south,
          };
        }
        break;
      case "L":
        for (let i = 0; i < moves; i++) {
          this.waypoint = {
            east: this.waypoint.south,
            north: this.waypoint.east,
            south: this.waypoint.west,
            west: this.waypoint.north,
          };
        }
        break;
    }
  }
}
