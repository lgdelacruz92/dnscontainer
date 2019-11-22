import { translate } from "./utils/translate";

export const drawLineVert = (fn, target, sibling, lineRef, x) => {
  if (fn(target, sibling)) {
    lineRef.current.setAttribute(
      "style",
      ["display: block", `transform: ${translate(x, 0)}`].join(";")
    );
  } else {
    lineRef.current.setAttribute("style", "");
  }
};

export const drawLineHori = (fn, target, sibling, lineRef, y) => {
  if (fn(target, sibling)) {
    lineRef.current.setAttribute(
      "style",
      ["display: block", `transform: ${translate(0, y)}`].join(";")
    );
  } else {
    lineRef.current.setAttribute("style", "");
  }
};
