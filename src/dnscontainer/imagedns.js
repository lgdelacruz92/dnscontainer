import React from "react";
import ReactImageDragAndScale from "react-image-drag-and-scale";

const ImageDNS = React.forwardRef((props, ref) => {
  const { data, containerRef, selected, onUpdate, onClick } = props;
  const [time, setTime] = React.useState(0);

  return (
    <ReactImageDragAndScale
      data={data}
      ref={ref}
      onStartUpdate={() => {
        setTime(Date.now());
      }}
      onUpdate={onUpdate}
      selected={selected}
      containerRef={containerRef}
      onEndUpdate={() => {
        if (Date.now() - time < 200) {
          console.log("Click");
          onClick();
        }
      }}
    />
  );
});

export default ImageDNS;
