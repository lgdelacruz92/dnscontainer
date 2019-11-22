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
        <DNSImage data={imageData} />
        <DNSImage data={imageData2} />
      </DNSContainer>
    </div>
  );
}

export default App;
