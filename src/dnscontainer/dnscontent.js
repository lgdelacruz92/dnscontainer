import React from "react";
import Content from "./content";

const DNSContent = React.forwardRef((props, ref) => {
  const {
    contentsRef,
    containerRef,
    onChangeEnd,
    content,
    leftLineRef,
    rightLineRef,
    topLineRef,
    bottomLineRef,
    vertLineRef,
    horiLineRef
  } = props;
  return (
    <Content
      ref={ref}
      contentsRef={contentsRef}
      containerRef={containerRef}
      onChangeEnd={onChangeEnd}
      data={content}
      leftLineRef={leftLineRef}
      rightLineRef={rightLineRef}
      topLineRef={topLineRef}
      bottomLineRef={bottomLineRef}
      horiLineRef={horiLineRef}
      vertLineRef={vertLineRef}
    />
  );
});

export default DNSContent;
