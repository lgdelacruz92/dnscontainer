import { translate } from "./utils/translate";

export const drawLine = (fn, target, sibling, lineRef) => {
  if (fn(target, sibling)) {
    lineRef.current.setAttribute(
      "style",
      ["display: block", `transform: ${translate(target.x, 0)}`].join(";")
    );
  } else {
    lineRef.current.setAttribute("style", "");
  }
};
