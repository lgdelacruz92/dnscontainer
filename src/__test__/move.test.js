import { moveDown, moveUp } from "../dnscontainer/content/layerhandler";

describe("Move Test", () => {
  const createImageDatas = indices => {
    let result = [];
    indices.forEach(i => {
      result.push({ id: i, index: i });
    });
    return result;
  };
  test("Move down test test", () => {
    let imageDatas = createImageDatas([0, 1, 2, 3]);
    moveDown(3, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 0
      },
      {
        id: 1,
        index: 1
      },
      {
        id: 2,
        index: 3
      },
      {
        id: 3,
        index: 2
      }
    ]);

    moveDown(3, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 0
      },
      {
        id: 1,
        index: 1
      },
      {
        id: 2,
        index: 2
      },
      {
        id: 3,
        index: 3
      }
    ]);

    moveDown(1, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 1
      },
      {
        id: 1,
        index: 0
      },
      {
        id: 2,
        index: 2
      },
      {
        id: 3,
        index: 3
      }
    ]);
  });

  test("Move up test test", () => {
    let imageDatas = createImageDatas([0, 1, 2, 3]);
    moveUp(0, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 1
      },
      {
        id: 1,
        index: 0
      },
      {
        id: 2,
        index: 2
      },
      {
        id: 3,
        index: 3
      }
    ]);

    moveUp(0, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 0
      },
      {
        id: 1,
        index: 1
      },
      {
        id: 2,
        index: 2
      },
      {
        id: 3,
        index: 3
      }
    ]);

    moveUp(0, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 1
      },
      {
        id: 1,
        index: 0
      },
      {
        id: 2,
        index: 2
      },
      {
        id: 3,
        index: 3
      }
    ]);
  });

  test("move test case 2", () => {
    let imageDatas = createImageDatas([0, 1]);
    moveDown(1, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 1
      },
      {
        id: 1,
        index: 0
      }
    ]);

    moveUp(0, imageDatas);
    expect(imageDatas).toEqual([
      {
        id: 0,
        index: 0
      },
      {
        id: 1,
        index: 1
      }
    ]);
  });
});
