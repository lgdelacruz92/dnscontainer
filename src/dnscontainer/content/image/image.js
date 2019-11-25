import React from "react";
import ReactImageDragAndScale from "react-image-drag-and-scale";
import * as MaterialUI from "@material-ui/core";
const useStyles = MaterialUI.makeStyles(theme => {
  return {
    image: {
      position: "absolute",
      zIndex: props => props.index
    }
  };
});

const Image = props => {
  const { data, onChange, onChangeEnd, onClick, onContextMenu } = props;
  const myRef = React.useRef();
  const [time, setTime] = React.useState(0);

  const classes = useStyles(data);

  return (
    <div className={classes.image}>
      <ReactImageDragAndScale
        ref={myRef}
        data={data}
        onContextMenu={onContextMenu}
        onStartUpdate={e => {
          setTime(Date.now());
        }}
        onUpdate={() => {
          const imageData = myRef.current.data;
          onChange(
            {
              x: imageData.x + imageData.translateX,
              y: imageData.y + imageData.translateY,
              h: imageData.scaledHeight,
              w: imageData.scaledWidth,
              src: imageData.src,
              id: imageData.id,
              type: imageData.type
            },
            imageData
          );
        }}
        containerRef={props.containerRef}
        onEndUpdate={e => {
          if (onClick && Date.now() - time < 2000) {
            onClick(e);
          }
          onChangeEnd(e, myRef.current.data);
        }}
      />
    </div>
  );
};

export default Image;
