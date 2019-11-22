import React from "react";
import Image from "./image/image";
import Text from "./text/text";
import { collectSiblings } from "./utils/siblingscollector";

const Content = React.forwardRef((props, ref) => {
  const { containerRef, data, siblingsRef } = props;

  const onChange = val => {
    ref.current = val;

    const children = siblingsRef.map(sr => sr.current);
    const siblings = collectSiblings(data, children);
    console.log("My siblings", siblings);
  };

  if (data.type === "image") {
    return (
      <Image
        key={data.id}
        containerRef={containerRef}
        id={data.id}
        onChange={onChange}
        onChangeEnd={() => {}}
      />
    );
  } else if (data.type === "text") {
    return <Text key={data.id} id={data.id} onChange={onChange} />;
  } else {
    return null;
  }
});

export default Content;
