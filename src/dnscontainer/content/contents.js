import React from "react";
import Image from "../image/image";
import Text from "../text/text";
import { moveDown, moveUp } from "./layerhandler";

const Contents = React.forwardRef((props, ref) => {
  const {
    containerRef,
    datas,
    vlRef,
    hlRef,
    leftLineRef,
    rightLineRef,
    topLineRef,
    bottomLineRef
  } = props;
  const refs = React.useRef([]);
  datas.forEach(s => refs.current.push(React.createRef()));
  const [state, setState] = React.useState(datas);

  React.useEffect(() => {
    if (ref) {
      ref.current = refs.current;
    }
  });

  return (
    <React.Fragment>
      {state.map((data, i) => {
        if (data.type === "image") {
          return (
            <Image
              key={i}
              ref={refs.current[i]}
              siblingRefs={refs}
              hlRef={hlRef}
              vlRef={vlRef}
              data={data}
              leftLineRef={leftLineRef}
              rightLineRef={rightLineRef}
              topLineRef={topLineRef}
              bottomLineRef={bottomLineRef}
              containerRef={containerRef}
              onMoveDown={i => {
                console.log("move down", i);
                moveDown(i, state);
                setState([...state]);
              }}
              onMoveUp={i => {
                console.log("move up", i);

                moveUp(i, state);
                setState([...state]);
              }}
            />
          );
        } else {
          return <Text key={i} textData={data} ref={refs.current[i]} />;
        }
      })}
    </React.Fragment>
  );
});

export default Contents;
