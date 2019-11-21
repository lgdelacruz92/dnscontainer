import React from "react";
import DNSImage from "react-image-drag-and-scale";

const Image = props => {
  const { onChange, onClick } = props;
  const myRef = React.useRef();
  return (
    <DNSImage
      ref={myRef}
      data={props.data}
      onContextMenu={e => {
        console.log("Context menu clicked", e);
      }}
      onStartUpdate={e => {
        console.log("Update starting", e);
      }}
      onUpdate={() => {
        const imageData = myRef.current.data;
        onChange({
          x: imageData.x + imageData.translateX,
          y: imageData.y + imageData.translateY,
          h: imageData.scaledHeight,
          w: imageData.scaledWidth,
          src: imageData.src,
          id: imageData.id,
          type: imageData.type
        });
      }}
      containerRef={props.containerRef}
      onEndUpdate={e => {
        console.log("End update", e);
      }}
    />
  );
};

export default Image;
