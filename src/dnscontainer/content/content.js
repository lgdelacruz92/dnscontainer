import React from "react";
import ContentBase from "./contentbase";
import { collectSiblings } from "../utils/siblingscollector";

import {
  isLeftAligned,
  isRightAligned,
  isHorizontallyCentered,
  isTopAligned,
  isBottomAligned,
  isVerticallyCentered
} from "../utils/siblingliner";
import { drawLineVert, drawLineHori } from "../linedrawer";

const Content = React.forwardRef((props, ref) => {
  const {
    contentsRef,
    data,
    containerRef,
    onChangeEnd,
    leftLineRef,
    rightLineRef,
    topLineRef,
    bottomLineRef,
    vertLineRef,
    horiLineRef
  } = props;

  return (
    <ContentBase
      ref={ref}
      key={data.id}
      data={data}
      onContextMenu={info => {
        info.e.preventDefault();
        return false;
      }}
      containerRef={containerRef}
      contentsRef={contentsRef}
      onChangeEnd={onChangeEnd}
      onChange={targetId => {
        const children = contentsRef.current.map(c => c.current);
        const target = children.find(d => d.id === targetId);
        const siblings = collectSiblings(target, children);
        siblings.forEach(sibling => {
          drawLineVert(isLeftAligned, target, sibling, leftLineRef, target.x);
          drawLineVert(
            isHorizontallyCentered,
            target,
            sibling,
            horiLineRef,
            (target.x * 2 + target.w) / 2
          );
          drawLineVert(
            isRightAligned,
            target,
            sibling,
            rightLineRef,
            target.x + target.w
          );

          drawLineHori(isTopAligned, target, sibling, topLineRef, target.y);

          drawLineHori(
            isBottomAligned,
            target,
            sibling,
            bottomLineRef,
            target.y + target.h
          );

          drawLineHori(
            isVerticallyCentered,
            target,
            sibling,
            vertLineRef,
            (target.y * 2 + target.h) / 2
          );
        });
      }}
    />
  );
});

export default Content;
