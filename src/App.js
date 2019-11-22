import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import { collectSiblings } from "./dnscontainer/utils/siblingscollector";

import { imageData, imageData2, text } from "./dnscontainer/data";
import Content from "./dnscontainer/content";
import VerticalLine from "./dnscontainer/verticalline";
import { isLeftAligned } from "./dnscontainer/utils/siblingliner";
import { translate } from "./dnscontainer/utils/translate";

function App() {
  const containerRef = React.useRef();
  const contentsRef = React.useRef([]);
  const leftLineRef = React.useRef();

  const datas = [imageData, text, imageData2];
  if (datas.length !== contentsRef.current.length) {
    datas.forEach(d => contentsRef.current.push(React.createRef()));
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          console.log(contentsRef.current, "The contents");
        }}
      >
        Click
      </button>
      <DNSContainer ref={containerRef} width={500} height={700}>
        {datas.map((data, i) => (
          <Content
            ref={contentsRef.current[i]}
            key={data.id}
            data={data}
            containerRef={containerRef}
            onChange={targetId => {
              const children = contentsRef.current.map(c => c.current);
              const target = children.find(d => d.id === targetId);
              const siblings = collectSiblings(target, children);
              siblings.forEach(sibling => {
                if (isLeftAligned(target, sibling)) {
                  leftLineRef.current.setAttribute(
                    "style",
                    [
                      "display: block",
                      `transform: ${translate(target.x, 0)}`
                    ].join(";")
                  );
                } else {
                  leftLineRef.current.setAttribute("style", "");
                }
              });
            }}
            onChangeEnd={() => {}}
          />
        ))}
        <VerticalLine ref={leftLineRef} />
      </DNSContainer>
    </div>
  );
}

export default App;
