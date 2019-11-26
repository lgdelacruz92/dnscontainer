import React from "react";
import * as MaterialUI from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortUp,
  faSortDown,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { translate } from "../utils/translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rightClick: {
      background: "white",
      transform: props => translate(props.x, props.y),
      position: "absolute",
      borderRadius: 5,
      padding: 5,
      width: 90,
      zIndex: 500,
      boxShadow: "1px 1px 3px black"
    },
    option: {
      display: "flex",
      alignItems: "flex-start",
      fontSize: 12,
      "&:hover": {
        background: "rgb(245, 245, 245)"
      }
    },
    icon: {
      "&>path": {
        transform: "translate(0, 35%)"
      },
      width: 50
    },
    trash: {
      fontSize: 10,
      "&>path": {
        transform: "translate(0, 35%)"
      }
    },
    text: {
      marginLeft: 5
    }
  };
});

const RightClickMenu = props => {
  const { open, x, y, onMoveUp, onMoveDown, onRemove } = props;
  const classes = useStyles({ x, y });
  return (
    <div hidden={!open} className={classes.rightClick}>
      <div onClick={onMoveUp} className={classes.option}>
        <FontAwesomeIcon icon={faSortUp} className={classes.icon} />
        <span className={classes.text}>move up</span>
      </div>
      <div onClick={onMoveDown} className={classes.option}>
        <FontAwesomeIcon icon={faSortDown} />
        <span className={classes.text}>move down</span>
      </div>
      <div onClick={onRemove} className={classes.option}>
        <FontAwesomeIcon icon={faTrash} className={classes.trash} />
        <span className={classes.text}>remove</span>
      </div>
    </div>
  );
};

export default RightClickMenu;
