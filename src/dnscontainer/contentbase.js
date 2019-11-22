import React from "react";
import Image from "./image/image";
import Text from "./text/text";

const ContentBase = React.forwardRef((props, ref) => {
  const { containerRef, data, onChange, onChangeEnd } = props;

  const _onChange = rect => {
    ref.current = rect;
    onChange(data.id);
  };

  if (data.type === "image") {
    return (
      <Image
        key={data.id}
        containerRef={containerRef}
        data={data}
        onChange={_onChange}
        onChangeEnd={onChangeEnd}
      />
    );
  } else if (data.type === "text") {
    return (
      <Text
        key={data.id}
        data={data}
        onChange={_onChange}
        onChangeEnd={onChangeEnd}
      />
    );
  } else {
    return null;
  }
});

export default ContentBase;
