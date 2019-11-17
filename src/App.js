import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";

function App() {
  let imageDatas = [];
  for (let i = 0; i < 2; i++) {
    const imageData = {
      x: 20 + 10 * i,
      y: 100,
      translateX: 0,
      translateY: 0,
      scaledWidth: 100,
      scaledHeight: 100,
      width: 100,
      height: 100,
      src: "https://source.unsplash.com/random/1000x1000",
      alt: "random",
      id: `unique-${i}`,
      index: i
    };
    imageDatas.push(imageData);
  }

  return (
    <div className="App">
      <DNSContainer width={500} height={700} imageDatas={imageDatas} />
    </div>
  );
}

export default App;
