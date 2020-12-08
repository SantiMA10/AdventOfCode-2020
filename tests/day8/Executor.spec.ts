import { Executor } from "../../src/day8/Executor";

describe("Executor", () => {
  describe("#run", () => {
    it("returns 0 as the value of the 'acc'", async () => {
      const subject = new Executor("nop +0");

      const { acc } = subject.run();

      expect(acc).toEqual(0);
    });

    it("returns 1 as the value of the 'acc'", async () => {
      const subject = new Executor("nop +0", "acc +1");

      const { acc } = subject.run();

      expect(acc).toEqual(1);
    });

    it("returns 0 as the value of the 'acc'", async () => {
      const subject = new Executor("nop +0", "jmp +2", "acc +1");

      const { acc } = subject.run();

      expect(acc).toEqual(0);
    });

    it("prevent the same instruction to be execute twice", async () => {
      const subject = new Executor("nop +0", "acc +1", "jmp -1");

      const { acc } = subject.run();

      expect(acc).toEqual(1);
    });
  });
});
