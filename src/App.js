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
    index: 0
  };

  const imageData2 = {
    x: 20,
    y: 120,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: `unique-124`,
    index: 1
  };

  const imageData3 = {
    x: 20,
    y: 120,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: `unique-125`,
    index: 2
  };

  const imageData4 = {
    x: 20,
    y: 120,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: `unique-126`,
    index: 3
  };

  const textData1 = {
    id: "id-unq-121"
  };

  const textData2 = {
    id: "id-unq-122"
  };

  const textDatas = [textData1, textData2];

  const [state, setState] = React.useState([
    imageData1,
    imageData2,
    imageData3,
    imageData4
  ]);
  return (
    <div className="App">
      <DNSContainer
        width={500}
        height={700}
        imageDatas={state}
        textDatas={textDatas}
      />
    </div>
  );
}

export default App;
