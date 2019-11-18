import { glo, ghi, closestG, linetool } from "../dnscontainer/utils/linetool";

describe("Line Tool", () => {
  test("Detection test", () => {
    const m = 51;
    const t = 50;
    const gl = glo(m, t);
    expect(gl).toEqual(50);

    const gh = ghi(m, t);
    expect(gh).toEqual(100);

    const f = closestG(m, gl, gh);
    expect(f).toEqual([50, 1]);
  });

  test("Detection test 2", () => {
    const t = 50;
    let collidedX = linetool(51, t);
    expect(collidedX).toEqual([50, 1]);

    collidedX = linetool(55, t);
    expect(collidedX).toEqual(null);
  });

  test("Detection test 3", () => {
    const t = 50;
    let collidedX = linetool(1, t);
    expect(collidedX).toEqual([0, 1]);

    collidedX = linetool(55, t);
    expect(collidedX).toEqual(null);
  });

  test("Detection test 4", () => {
    const t = 50;
    let collidedX = linetool(99, t);
    expect(collidedX).toEqual([100, 1]);

    collidedX = linetool(55, t);
    expect(collidedX).toEqual(null);
  });

  test("Detection test 4", () => {
    const t = 5;
    let collidedX = linetool(99, t);
    expect(collidedX).toEqual([100, 1]);

    collidedX = linetool(55, t);
    expect(collidedX).toEqual([55, 0]);
  });

  test("Detection test 4", () => {
    const t = 50;
    let collidedX = linetool(96, t, 5);
    expect(collidedX).toEqual([100, 4]);

    collidedX = linetool(55, t, 5);
    expect(collidedX).toEqual([50, 5]);
  });
});
