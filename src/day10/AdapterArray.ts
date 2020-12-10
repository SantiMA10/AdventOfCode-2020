export class AdapterArray {
  private adapters: number[];

  public constructor(...adapters: number[]) {
    this.adapters = [0, ...adapters.sort((a, b) => a - b)];
  }

  public getNumberOfJoltsDifferences(): number {
    const oneJoltDifferences: number[] = [];
    const threeJoltDifferences: number[] = [
      this.adapters[this.adapters.length - 1],
    ];

    for (let i = 0; i < this.adapters.length - 1; i++) {
      const current = this.adapters[i];
      const next = this.adapters[i + 1];

      switch (Math.abs(current - next)) {
        case 1:
          oneJoltDifferences.push(current);
          break;
        case 3:
          threeJoltDifferences.push(current);
          break;
      }
    }

    return oneJoltDifferences.length * threeJoltDifferences.length;
  }
}
