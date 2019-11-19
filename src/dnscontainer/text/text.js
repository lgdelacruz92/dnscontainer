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

  React.useEffect(() => {
    const span = document.getElementById("text-draggable");
    if (span) {
      span.focus();
      span.addEventListener("click", () => console.log("Span is clicked"));
      span.addEventListener("focus", () => console.log("Span is focused"));
      span.addEventListener("blur", () => console.log("Span is blurred"));
    }
    return () => {};
  });
  return (
    <div className={classes.text}>
      <TextDNS textData={textData} />
    </div>
  );
};

export default Text;
