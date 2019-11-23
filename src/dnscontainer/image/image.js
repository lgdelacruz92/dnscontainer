import React from "react";
import ReactImageDragAndScale from "react-image-drag-and-scale";
import * as MaterialUI from "@material-ui/core";
import RightClickMenu from "../rightclickmenu";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    image: {
      position: "absolute",
      zIndex: props => props.index
    }
  };
});

const Image = props => {
  const { data, onChange, onChangeEnd, onClick } = props;
  const myRef = React.useRef();
  const [time, setTime] = React.useState(0);
  const [rightClickOpen, setRightClickOpen] = React.useState(false);

  const classes = useStyles(data);

  React.useEffect(() => {
    const onClick = () => {
      setRightClickOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className={classes.image}>
      <ReactImageDragAndScale
        ref={myRef}
        data={data}
        onContextMenu={e => {
          setRightClickOpen(true);
          e.preventDefault();
          return false;
        }}
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
      <RightClickMenu
        x={
          myRef.current
            ? myRef.current.data.x + myRef.current.data.translateX + 10
            : 0
        }
        y={
          myRef.current
            ? myRef.current.data.y + +myRef.current.data.translateY + 10
            : 0
        }
        onMoveUp={() => {
          myRef.current.data.index += 1;
          onChangeEnd(null, myRef.current.data);
        }}
        onMoveDown={() => {
          if (myRef.current.data.index > 0) {
            myRef.current.data.index -= 1;
            onChangeEnd(null, myRef.current.data);
          }
        }}
        open={rightClickOpen}
      />
    </div>
  );
};

export default Image;
