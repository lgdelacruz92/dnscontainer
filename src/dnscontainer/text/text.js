import React from "react";
import * as MaterialUI from "@material-ui/core";
import TextDNS from "react-editable-and-draggable-text-2";

const useStyles = MaterialUI.makeStyles(theme => {
  return {};
});

const Text = props => {
  const classes = useStyles();
  const { textData } = props;
  return <TextDNS textData={textData} />;
};

export default Text;
