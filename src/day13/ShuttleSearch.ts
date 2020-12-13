interface Options {
  timestamp: number;
  busses: string[];
}

export class ShuttleSearch {
  private timestamp: number;
  private busses: number[];

  public constructor({ timestamp, busses }: Options) {
    this.timestamp = timestamp;
    this.busses = busses
      .filter((bus) => bus !== "x")
      .map((bus) => parseInt(bus, 10));
  }

  public getBusId(timestamp: number = this.timestamp): number {
    const nextBus = this.busses.find((bus) => timestamp % bus === 0);

    if (nextBus) {
      return nextBus;
    }

    return this.getBusId(timestamp + 1);
  }

  public getWaitingTime(timestamp: number = this.timestamp): number {
    const nextBus = this.busses.find((bus) => timestamp % bus === 0);

    if (nextBus) {
      return timestamp - this.timestamp;
    }

    return this.getWaitingTime(timestamp + 1);
  }
}
