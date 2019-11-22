import { getVerticalCenter } from "../dnscontainer/utils/linegetter";
describe("Line getter test", () => {
  test("Get vertical center", () => {
    const result = getVerticalCenter({ y: 50, h: 100 });
    expect(result).toBe(100);
  });
});
