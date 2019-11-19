import React from "react";
import * as MaterialUI from "@material-ui/core";
import Text from "../text/text";

const Texts = props => {
  const { textDatas } = props;
  return (
    <div>
      {textDatas.map(textData => (
        <Text textData={textData} />
      ))}
    </div>
  );
};

export default Texts;
