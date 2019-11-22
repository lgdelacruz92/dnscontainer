import {
  isVerticallyCentered,
  isHorizontallyCentered,
  isTopAligned,
  isBottomAligned
} from "../dnscontainer/utils/siblingliner";
describe("Sibling Liner", () => {
  test("Vertical align test", () => {
    let sibling = { x: 50, y: 50, w: 100, h: 100 };
    let result = isVerticallyCentered({ x: 0, y: 50, w: 100, h: 100 }, sibling);
    expect(result).toEqual(true);

    sibling = { x: 50, y: 50, w: 100, h: 100 };
    result = isVerticallyCentered({ x: 0, y: 45, w: 100, h: 100 }, sibling);
    expect(result).toEqual(false);
  });

  test("Horizontal align test", () => {
    let sibling = { x: 50, y: 50, w: 100, h: 100 };
    let result = isHorizontallyCentered(
      { x: 50, y: 50, w: 100, h: 100 },
      sibling
    );
    expect(result).toEqual(true);

    sibling = { x: 50, y: 50, w: 100, h: 100 };
    result = isHorizontallyCentered({ x: 45, y: 45, w: 100, h: 100 }, sibling);
    expect(result).toEqual(false);
  });

  test("Is top align", () => {
    let sibling = { x: 50, y: 50, w: 100, h: 100 };
    let result = isTopAligned({ x: 50, y: 50, w: 100, h: 100 }, sibling);
    expect(result).toEqual(true);

    sibling = { x: 50, y: 50, w: 100, h: 100 };
    result = isTopAligned({ x: 45, y: 45, w: 100, h: 100 }, sibling);
    expect(result).toEqual(false);
  });

  test("Is bottom align", () => {
    let sibling = { x: 50, y: 50, w: 100, h: 100 };
    let result = isBottomAligned({ x: 50, y: 50, w: 100, h: 100 }, sibling);
    expect(result).toEqual(true);

    sibling = { x: 50, y: 50, w: 100, h: 100 };
    result = isBottomAligned({ x: 45, y: 45, w: 100, h: 100 }, sibling);
    expect(result).toEqual(false);
  });

  test("Is right align", () => {
    let sibling = { x: 50, y: 50, w: 100, h: 100 };
    let result = isRightAligned({ x: 50, y: 50, w: 100, h: 100 }, sibling);
    expect(result).toEqual(true);

    sibling = { x: 50, y: 50, w: 100, h: 100 };
    result = isRightAligned({ x: 45, y: 45, w: 100, h: 100 }, sibling);
    expect(result).toEqual(false);
  });
});
