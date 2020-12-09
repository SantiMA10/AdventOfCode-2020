type Options = {
  inputs: number[];
  preambleSize: number;
};

export class XMASDecoder {
  private inputs: number[];
  private preambleSize: number;

  public constructor({ inputs, preambleSize }: Options) {
    this.inputs = inputs;
    this.preambleSize = preambleSize;
  }

  public findFirstInvalidNumber(): number {
    for (let i = this.preambleSize; i < this.inputs.length; i++) {
      const current = this.inputs[i];
      let sum: boolean = false;

      for (let j = i - 1; j >= i - this.preambleSize; j--) {
        for (let k = i - 1; k >= i - this.preambleSize; k--) {
          if (j !== k && this.inputs[j] + this.inputs[k] === current) {
            sum = true;
          }
        }
      }

      if (!sum) {
        return current;
      }
    }

    return -1;
  }
}
