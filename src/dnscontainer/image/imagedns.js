import React from "react";
import ReactImageDragAndScale from "../../image/image";

const ImageDNS = React.forwardRef((props, ref) => {
  const {
    data,
    containerRef,
    selected,
    onUpdate,
    onClick,
    onEndUpdate,
    onContextMenu
  } = props;
  const [time, setTime] = React.useState(0);

  return (
    <ReactImageDragAndScale
      data={data}
      ref={ref}
      onStartUpdate={e => {
        if (e.which === 1) {
          // only left click counts
          setTime(Date.now());
        }
      }}
      onUpdate={onUpdate}
      selected={selected}
      containerRef={containerRef}
      onContextMenu={onContextMenu}
      onEndUpdate={e => {
        if (Date.now() - time < 200 && e.which === 1) {
          onClick(e);
        }
        onEndUpdate();
      }}
    />
  );
});

export default ImageDNS;
