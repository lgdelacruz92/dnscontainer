import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import DNSImage from "./dnscontainer/dnsimage";
import { imageData, imageData2 } from "./dnscontainer/data";

function App() {
  return (
    <div className="App">
      <button onClick={() => {}}>Click</button>
      <DNSContainer width={500} height={700}>
        <DNSImage
          data={imageData}
          onChangeEnd={d => {
            console.log("change end", d);
          }}
        />
        <DNSImage
          data={imageData2}
          onChangeEnd={d => {
            console.log("chane end", d);
          }}
        />
      </DNSContainer>
    </div>
  );
}

export default App;
