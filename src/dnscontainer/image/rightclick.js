import React from "react";
import * as MaterialUI from "@material-ui/core";
import * as MaterialIcon from "@material-ui/icons";
import { translate } from "../utils/translate";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rightClickMenu: {
      position: "absolute",
      padding: 0,
      transform: props => translate(props.x, props.y),
      zIndex: 10
    },
    list: {
      padding: 0
    },
    gutters: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      paddingBottom: 0
    },
    listitemicon: {
      minWidth: 24,
      marginRight: 3
    }
  };
});

const RightClick = props => {
  const { open, data, onMoveUp, onMoveDown } = props;
  const classes = useStyles(data);
  return (
    <MaterialUI.Paper elevation={3} className={classes.rightClickMenu}>
      <MaterialUI.List
        classes={{ padding: classes.list }}
        component="ul"
        aria-label="secondary mailbox folders"
        hidden={!open}
      >
        <MaterialUI.ListItem
          onClick={onMoveUp}
          classes={{ gutters: classes.gutters }}
          button
        >
          <MaterialUI.ListItemIcon classes={{ root: classes.listitemicon }}>
            <MaterialIcon.Layers />
          </MaterialUI.ListItemIcon>
          <MaterialUI.ListItemText primary="Move Up" />
        </MaterialUI.ListItem>
        <MaterialUI.ListItem
          onClick={onMoveDown}
          classes={{ gutters: classes.gutters }}
          button
        >
          <MaterialUI.ListItemIcon classes={{ root: classes.listitemicon }}>
            <MaterialIcon.Layers />
          </MaterialUI.ListItemIcon>
          <MaterialUI.ListItemText primary="Move Down" />
        </MaterialUI.ListItem>
      </MaterialUI.List>
    </MaterialUI.Paper>
  );
};

export default RightClick;
