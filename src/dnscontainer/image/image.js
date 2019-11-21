import React from "react";
import DNSImage from "react-image-drag-and-scale";

const Image = props => {
  const { onChange, onClick, onChangeEnd } = props;
  const myRef = React.useRef();
  const [time, setTime] = React.useState(0);
  return (
    <DNSImage
      ref={myRef}
      data={props.data}
      onContextMenu={e => {}}
      onStartUpdate={e => {
        setTime(Date.now());
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
        if (Date.now() - time < 2000) {
          onClick(e);
        }
        onChangeEnd(e);
      }}
    />
  );
};

export default Image;
