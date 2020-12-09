import { XMASDecoder } from "../../src/day9/XMASDecoder";

describe("XMASDecoder", () => {
  describe("#findFirstInvalidNumber", () => {
    it("returns the first number that doesn't can be obtain as the sum of two in the last 2", async () => {
      const subject = new XMASDecoder({
        inputs: [35, 20, 15, 26],
        preambleSize: 2,
      });

      const invalid = subject.findFirstInvalidNumber();

      expect(invalid).toEqual(15);
    });

    it("returns the first number that doesn't can be obtain as the sum of two in the last 2", async () => {
      const subject = new XMASDecoder({
        inputs: [5, 10, 15, 26],
        preambleSize: 2,
      });

      const invalid = subject.findFirstInvalidNumber();

      expect(invalid).toEqual(26);
    });

    it("returns the first number that doesn't can be obtain as the sum of two in the last 5", async () => {
      const subject = new XMASDecoder({
        inputs: [
          35,
          20,
          15,
          25,
          47,
          40,
          62,
          55,
          65,
          95,
          102,
          117,
          150,
          182,
          127,
          219,
          299,
          277,
          309,
          576,
        ],
        preambleSize: 5,
      });

      const invalid = subject.findFirstInvalidNumber();

      expect(invalid).toEqual(127);
    });
  });
});
