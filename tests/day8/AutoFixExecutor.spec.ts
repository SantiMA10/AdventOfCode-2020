import { AutoFixExecutor } from "../../src/day8/AutoFixExecutor";

describe("AutoFixExecutor", () => {
  describe("#run", () => {
    it("executes the last line of program", async () => {
      const subject = new AutoFixExecutor(
        "nop +0",
        "acc +1",
        "jmp +4",
        "acc +3",
        "jmp -3",
        "acc -99",
        "acc +1",
        "jmp -4",
        "acc +6"
      );

      const { executedInstructions } = subject.run();

      expect(executedInstructions).toEqual(expect.arrayContaining([8]));
    });

    it("returns the expected 'acc' after executing the last line of the program", async () => {
      const subject = new AutoFixExecutor(
        "nop +0",
        "acc +1",
        "jmp +4",
        "acc +3",
        "jmp -3",
        "acc -99",
        "acc +1",
        "jmp -4",
        "acc +6"
      );

      const { acc } = subject.run();

      expect(acc).toEqual(8);
    });
  });
});
