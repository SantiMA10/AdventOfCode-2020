interface Options {
  busses: string[];
}

export class BusContest {
  private busses: { id: number; index: number }[];

  public constructor({ busses }: Options) {
    this.busses = busses
      .map((id, index) => ({ id, index }))
      .filter(({ id }) => id !== "x")
      .map(({ id, index }) => ({ id: parseInt(id, 10), index }));
  }

  public getMagicTimestamp(): number {
    let initialTimestamp = this.busses[0].id;
    let magicTimestamp = initialTimestamp;
    let validTimestamp = this.busses.every(
      (bus) => (magicTimestamp + bus.index) % bus.id === 0
    );

    let nextBusIndex = 1;

    while (!validTimestamp) {
      const nextBus = this.busses[nextBusIndex];

      if ((magicTimestamp + nextBus.index) % nextBus.id === 0) {
        initialTimestamp *= nextBus.id;
        nextBusIndex++;
      }

      magicTimestamp += initialTimestamp;

      validTimestamp = this.busses.every(
        (bus) => (magicTimestamp + bus.index) % bus.id === 0
      );
    }

    return magicTimestamp;
  }
}
