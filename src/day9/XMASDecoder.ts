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
        for (let k = j - 1; k >= i - this.preambleSize; k--) {
          if (this.inputs[j] + this.inputs[k] === current) {
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

  public findSequence(target: number): number {
    for (let i = 0; i < this.inputs.length; i++) {
      const initialSequence = this.inputs[i];
      let accumulate = initialSequence;
      const sequence = [initialSequence];

      for (let j = i + 1; j < this.inputs.length; j++) {
        const current = this.inputs[j];
        accumulate += current;
        sequence.push(current);

        if (accumulate === target) {
          return Math.max(...sequence) + Math.min(...sequence);
        }
      }
    }

    return -1;
  }
}
