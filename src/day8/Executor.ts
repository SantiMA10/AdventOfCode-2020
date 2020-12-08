export class Executor {
  private instructions: string[];
  private executedInstructions: number[];
  private acc: number;

  public constructor(...instructions: string[]) {
    this.instructions = instructions;
    this.executedInstructions = [];
    this.acc = 0;
  }

  public run(): { acc: number } {
    for (let i = 0; i < this.instructions.length; i++) {
      if (this.executedInstructions.includes(i)) {
        break;
      }

      this.executedInstructions.push(i);
      const instruction = this.instructions[i];

      if (instruction.includes("jmp")) {
        const [_, offset] = instruction.split(" ");

        // extra -1 to prevent the effect of the i++
        i += parseInt(offset, 10) - 1;
      }

      if (instruction.includes("acc")) {
        const [_, nextAcc] = instruction.split(" ");

        this.acc += parseInt(nextAcc, 10);
      }
    }

    return {
      acc: this.acc,
    };
  }
}
