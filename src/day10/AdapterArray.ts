export class AdapterArray {
  private adapters: number[];
  private cache: Record<number, number>;

  public constructor(...adapters: number[]) {
    this.adapters = [
      0, // The outlet near your seat as having an effective joltage rating of 0.
      ...adapters.sort((a, b) => a - b),
    ];
    this.cache = {};
  }

  public getNumberOfJoltsDifferences(): number {
    const oneJoltDifferences: number[] = [];
    const threeJoltDifferences: number[] = [
      // Your device has a built-in joltage adapter rated for 3 jolts higher than the highest-rated adapter in your bag
      // so the last one always has a 3 jolt difference
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

  public getNumberOfSupportedArrangements(index: number = 0): number {
    if (index === this.adapters.length - 1) {
      return 1;
    }

    if (this.cache[index]) {
      return this.cache[index];
    }

    let solutions = 0;

    for (let i = index + 1; i < this.adapters.length; i++) {
      const prev = this.adapters[index];
      const current = this.adapters[i];

      if (Math.abs(current - prev) <= 3) {
        solutions += this.getNumberOfSupportedArrangements(i);
      }
    }

    this.cache[index] = solutions;
    return solutions;
  }
}
