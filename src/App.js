import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";

function App() {
  const imageData1 = {
    x: 20,
    y: 100,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: `unique-123`,
    index: 1
  };

  const textData1 = {
    id: "id-unq-121",
    index: 0
  };

  const textDatas = [textData1];
  const imageDatas = [imageData1];

  return (
    <div className="App">
      <DNSContainer
        width={500}
        height={700}
        imageDatas={imageDatas}
        textDatas={textDatas}
      />
    </div>
  );
}

export default App;
