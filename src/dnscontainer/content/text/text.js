import React from "react";
import * as MaterialUI from "@material-ui/core";
import TextEditableAndDraggableText from "react-editable-and-draggable-text-2";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      position: "absolute",
      zIndex: props => props.index
    }
  };
});

const Text = props => {
  const { data, onChange, onChangeEnd, onContextMenu } = props;
  const classes = useStyles(data);
  const textDNSRef = React.useRef();

  React.useEffect(() => {
    const textDNSReference = textDNSRef.current.span;
    const onRightClick = e => {
      textDNSRef.current.textData.type = "text";
      onContextMenu({ e, data: textDNSRef.current.textData });
    };

    textDNSReference.addEventListener("contextmenu", onRightClick);
    return () =>
      textDNSReference.removeEventListener("contextmenu", onRightClick);
  }, [onContextMenu]);

  return (
    <div className={classes.text}>
      <TextEditableAndDraggableText
        textData={data}
        ref={textDNSRef}
        onChangeEnd={id => {
          onChangeEnd(null, textDNSRef.current.textData);
        }}
        onUpdate={() => {
          const spanRect = textDNSRef.current.span.getBoundingClientRect();
          const textData = textDNSRef.current.textData;
          onChange(
            {
              x: textData.x,
              y: textData.y,
              w: spanRect.width,
              h: spanRect.height,
              id: textData.id,
              text: textData.text,
              textAlign: textData.textAlign,
              textDecoration: textData.textDecoration,
              fontSize: textData.fontSize,
              fontStyle: textData.fontStyle,
              fontFamily: textData.fontFamily,
              fontWeight: textData.fontWeight
            },
            textData
          );
        }}
      />
    </div>
  );
};

export default Text;
