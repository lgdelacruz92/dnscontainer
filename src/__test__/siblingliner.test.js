import {
  isVerticalCentered,
  isHorizontallyCentered,
  lineWithSiblings
} from "../dnscontainer/siblingliner/siblingliner";
describe("Sibling Liner", () => {
  test("Vertical align test", () => {
    let rect = { x: 50, y: 50, w: 100, h: 100 };
    let result = isVerticalCentered({ x: 0, y: 50, w: 100, h: 100 }, rect);
    expect(result).toEqual(100);

    rect = { x: 50, y: 50, w: 100, h: 100 };
    result = isVerticalCentered({ x: 0, y: 45, w: 100, h: 100 }, rect);
    expect(result).toEqual(null);
  });

  test("Horizontal align test", () => {
    let rect = { x: 50, y: 50, w: 100, h: 100 };
    let result = isHorizontallyCentered({ x: 50, y: 50, w: 100, h: 100 }, rect);
    expect(result).toEqual(100);

    rect = { x: 50, y: 50, w: 100, h: 100 };
    result = isHorizontallyCentered({ x: 45, y: 45, w: 100, h: 100 }, rect);
    expect(result).toEqual(null);
  });

  test("Line up test", () => {
    let siblings = [
      { x: 0, y: 0, w: 100, h: 100 },
      { x: 50, y: 0, w: 100, h: 100 },
      { x: 100, y: 0, w: 100, h: 100 },
      { x: 0, y: 50, w: 100, h: 100 },
      { x: 50, y: 50, w: 100, h: 100 }
    ];
    let result = lineWithSiblings({ x: 0, y: 0, w: 100, h: 100 }, siblings);
    expect(result).toEqual([
      { vertical: 50, type: "center" },
      { horizontal: 50, type: "center" },
      { vertical: 50, type: "center" },
      { vertical: 50, type: "center" },
      { horizontal: 50, type: "center" }
    ]);
  });
});
