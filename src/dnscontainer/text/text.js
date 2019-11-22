import React from "react";
import * as MaterialUI from "@material-ui/core";
import TextDNS from "react-editable-and-draggable-text-2";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      position: "absolute",
      zIndex: props => props.index
    }
  };
});

const Text = props => {
  const { data, onChange } = props;
  const classes = useStyles(data);
  const textDNSRef = React.useRef();

  return (
    <div className={classes.text}>
      <TextDNS
        textData={data}
        ref={textDNSRef}
        onUpdate={() => {
          const spanRect = textDNSRef.current.span.getBoundingClientRect();
          const textData = textDNSRef.current.textData;
          onChange({
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
          });
        }}
      />
    </div>
  );
};

export default Text;
