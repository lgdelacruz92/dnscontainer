import React from "react";
import Image from "./image/image";
import Text from "./text/text";

const Content = React.forwardRef((props, ref) => {
  const { containerRef, data, onChange } = props;

  const _onChange = val => {
    ref.current = val;
    onChange(data.id);
  };

  if (data.type === "image") {
    return (
      <Image
        key={data.id}
        containerRef={containerRef}
        id={data.id}
        onChange={_onChange}
        onChangeEnd={() => {}}
      />
    );
  } else if (data.type === "text") {
    return <Text key={data.id} id={data.id} onChange={_onChange} />;
  } else {
    return null;
  }
});

export default Content;
