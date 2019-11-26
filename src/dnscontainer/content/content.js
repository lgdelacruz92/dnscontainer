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
import RightClickMenu from "./rightclickmenu";

const Content = React.forwardRef((props, ref) => {
  const {
    contentsRef,
    data,
    containerRef,
    onChangeEnd,
    onRemove,
    leftLineRef,
    rightLineRef,
    topLineRef,
    bottomLineRef,
    vertLineRef,
    horiLineRef
  } = props;

  const [rightClick, setRightClick] = React.useState({
    open: false,
    x: 0,
    y: 0
  });

  React.useEffect(() => {
    const onClick = e => {
      setRightClick(r => ({ ...r, open: false }));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <React.Fragment>
      <ContentBase
        ref={ref}
        key={data.id}
        data={data}
        onContextMenu={info => {
          let x = 0;
          let y = 0;
          if (info.data.type === "image") {
            x = info.data.x + info.data.translateX;
            y = info.data.y + info.data.translateY;
          } else if (info.data.type === "text") {
            x = info.data.x;
            y = info.data.y;
          }
          setRightClick({
            ...rightClick,
            open: true,
            x: x,
            y: y
          });
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
      <RightClickMenu
        open={rightClick.open}
        x={rightClick.x}
        y={rightClick.y}
        onMoveDown={() => {
          if (data.index > 0) {
            data.index -= 1;
            onChangeEnd(data);
          }
        }}
        onRemove={onRemove}
        onMoveUp={() => {
          data.index += 1;
          onChangeEnd(data);
        }}
      />
    </React.Fragment>
  );
});

export default Content;
