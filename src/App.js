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
    index: 1,
    type: "image"
  };

  const imageData2 = {
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
    id: `unique-124`,
    index: 2,
    type: "image"
  };

  const textData1 = {
    id: "id-unq-121",
    x: 100,
    y: 100,
    fontWeight: "bold",
    text: "Hello",
    index: 0,
    type: "text"
  };

  const datas = [textData1, imageData1, imageData2];
  const dnsRef = React.useRef();

  return (
    <div className="App">
      <DNSContainer width={500} height={700} datas={datas} ref={dnsRef} />
      <button
        onClick={() => {
          console.log("Dns snapshot", dnsRef.current);
        }}
      >
        Take Snapshot
      </button>
    </div>
  );
}

export default App;
