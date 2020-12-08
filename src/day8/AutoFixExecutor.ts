import { Executor } from "./Executor";

export class AutoFixExecutor {
  private instructions: string[];

  public constructor(...instructions: string[]) {
    this.instructions = instructions;
  }

  public run(): { acc: number; executedInstructions: number[] } {
    let acc: number = 0;
    let executedInstructions: number[] = [];

    for (let i = 0; i < this.instructions.length; i++) {
      if (executedInstructions.includes(this.instructions.length - 1)) {
        break;
      }

      const instructions = [...this.instructions];

      if (instructions[i].includes("nop")) {
        instructions[i] = instructions[i].replace("nop", "jmp");
      }

      if (instructions[i].includes("jmp")) {
        instructions[i] = instructions[i].replace("jmp", "nop");
      }

      ({ acc, executedInstructions } = new Executor(...instructions).run());
    }

    return { acc, executedInstructions };
  }
}
