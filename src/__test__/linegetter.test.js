import {
  getVerticalCenter,
  getHorizontalCenter
} from "../dnscontainer/utils/linegetter";
describe("Line getter test", () => {
  test("Get vertical center", () => {
    const result = getVerticalCenter({ y: 50, h: 100 });
    expect(result).toBe(100);
  });

  test("Get horizontal center", () => {
    const result = getHorizontalCenter({ x: 50, w: 100 });
    expect(result).toBe(100);
  });
});
