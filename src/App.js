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
    id: `unique-123`
  };

  const imageData2 = {
    x: 40,
    y: 120,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: `unique-124`
  };

  const [state, setState] = React.useState([imageData1, imageData2]);
  console.log("Rendering app");
  return (
    <div className="App">
      <button
        onClick={() => {
          const temp = state[0];
          state[0] = state[1];
          state[1] = temp;
          setState([...state]);
        }}
      >
        Click
      </button>
      <DNSContainer width={500} height={700} imageDatas={state} />
    </div>
  );
}

export default App;
