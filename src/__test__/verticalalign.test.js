import Rectangle from "../dnscontainer/rectangle";

describe("Alignment Tests", () => {
  test("Vertical alignment tests", () => {
    const rect1 = new Rectangle({ x: 0, y: 0, width: 100, height: 100 });
    const rect2 = new Rectangle({ x: 100, y: 0, width: 100, height: 100 });

    expect(rect1.isVerticallyCentered(rect2)).toBe(true);
  });
});
