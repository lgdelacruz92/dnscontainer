import React from "react";
import * as MaterialUI from "@material-ui/core";
import * as MaterialIcons from "@material-ui/icons";
import { translate } from "../utils/translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rightClick: {
      background: "white",
      transform: props => translate(props.x, props.y),
      position: "absolute",
      borderRadius: 5,
      padding: 5,
      width: 130
    },
    option: {
      display: "flex",
      alignItems: "center",
      "&:hover": {
        background: "rgb(245, 245, 245)"
      }
    },
    text: {
      marginLeft: 5
    }
  };
});

const RightClickMenu = props => {
  const { open, x, y, onMoveUp, onMoveDown } = props;
  const classes = useStyles({ x, y });
  return (
    <div hidden={!open} className={classes.rightClick}>
      <div onClick={onMoveUp} className={classes.option}>
        <MaterialIcons.Layers />
        <span className={classes.text}>move up</span>
      </div>
      <div onClick={onMoveDown} className={classes.option}>
        <MaterialIcons.Layers />
        <span className={classes.text}>move down</span>
      </div>
    </div>
  );
};

export default RightClickMenu;
