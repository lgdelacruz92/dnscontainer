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
  const { textData } = props;
  const classes = useStyles(textData);
  const textDNSRef = React.useRef();
  return (
    <div className={classes.text}>
      <TextDNS textData={textData} ref={textDNSRef} onUpdate={() => {}} />
    </div>
  );
};

export default Text;
