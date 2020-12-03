export class Forest {
  private forest: string[][];

  public constructor(forest: string) {
    this.forest = forest.split("\n").map((line) => line.split(""));
  }

  public isTree(x: number, y: number): boolean {
    return this.forest[this.transformY(y)][this.transformX(x)] === "#";
  }

  private transformX(x: number): number {
    if (x <= this.forest[0].length) {
      return x - 1;
    }

    return this.transformX(x - this.forest[0].length);
  }

  private transformY(y: number): number {
    return y - 1;
  }

  public limit(): number {
    return this.forest.length;
  }
}
