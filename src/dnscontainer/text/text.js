import React from "react";
import * as MaterialUI from "@material-ui/core";
import TextDNS from "react-editable-and-draggable-text-2";
import { data } from "../data";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    text: {
      position: "absolute",
      zIndex: props => props.index
    }
  };
});

const Text = props => {
  const { id, onChange } = props;
  const [state, setState] = React.useState(null);
  const classes = useStyles(state ? state : { index: 0 });
  const textDNSRef = React.useRef();

  React.useEffect(() => {
    setState(data.find(d => d.id === id));
  }, [id]);

  return (
    <div className={classes.text}>
      {state ? (
        <TextDNS
          textData={state}
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
      ) : null}
    </div>
  );
};

export default Text;
