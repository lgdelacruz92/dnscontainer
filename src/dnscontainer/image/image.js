import React from "react";
import DNSImage from "react-image-drag-and-scale";
import * as MaterialUI from "@material-ui/core";
import { data } from "../data";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    image: {
      position: "absolute",
      zIndex: props => props.index
    }
  };
});

const Image = props => {
  const { id } = props;
  const myRef = React.useRef();
  const [state, setState] = React.useState(null);
  const [time, setTime] = React.useState(0);

  const classes = useStyles(state ? state : { index: 0 });

  const onClick = e => {};

  const onChange = d => {};

  const onChangeEnd = e => {};

  React.useEffect(() => {
    setState(data.find(d => d.id === id));
  }, [id]);

  return (
    <div className={classes.image}>
      {state ? (
        <DNSImage
          ref={myRef}
          data={state}
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
      ) : null}
    </div>
  );
};

export default Image;
