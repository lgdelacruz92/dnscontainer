import { moveDown } from "../dnscontainer/images/layerhandler";

describe("Move Test", () => {
  const createImageDatas = indices => {
    let result = [];
    indices.forEach(i => {
      result.push({ id: i });
    });
    return result;
  };
  test("Move down test test", () => {
    let imageDatas = createImageDatas([0, 1, 2, 3]);
    moveDown(3, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0
      },
      {
        id: 1
      },
      {
        id: 3
      },
      {
        id: 2
      }
    ]);
  });
});
