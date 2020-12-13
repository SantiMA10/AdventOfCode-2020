interface Options {
  timestamp: number;
  buses: string[];
}

export class ShuttleSearch {
  private timestamp: number;
  private buses: number[];

  public constructor({ timestamp, buses }: Options) {
    this.timestamp = timestamp;
    this.buses = buses
      .filter((bus) => bus !== "x")
      .map((bus) => parseInt(bus, 10));
  }

  public getBusId(timestamp: number = this.timestamp): number {
    const nextBus = this.buses.find((bus) => timestamp % bus === 0);

    if (nextBus) {
      return nextBus;
    }

    return this.getBusId(timestamp + 1);
  }

  public getWaitingTime(timestamp: number = this.timestamp): number {
    const nextBus = this.buses.find((bus) => timestamp % bus === 0);

    if (nextBus) {
      return timestamp - this.timestamp;
    }

    return this.getWaitingTime(timestamp + 1);
  }
}
