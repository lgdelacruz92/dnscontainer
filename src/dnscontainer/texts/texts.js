import React from "react";
import * as MaterialUI from "@material-ui/core";
import Text from "../text/text";

const Texts = props => {
  const { textDatas } = props;
  return (
    <React.Fragment>
      {textDatas.map(textData => (
        <Text textData={textData} key={textData.id} />
      ))}
    </React.Fragment>
  );
};

export default Texts;
