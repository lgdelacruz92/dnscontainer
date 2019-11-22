import React from "react";
import Image from "./image/image";
import Text from "./text/text";

const Content = React.forwardRef((props, ref) => {
  const { containerRef, data, onChange, onChangeEnd } = props;
  if (data.type === "image") {
    return (
      <Image
        key={data.id}
        containerRef={containerRef}
        id={data.id}
        onChange={onChange}
        onChangeEnd={onChangeEnd}
      />
    );
  } else if (data.type === "text") {
    return <Text key={data.id} id={data.id} onChange={onChange} />;
  } else {
    return null;
  }
});

export default Content;
