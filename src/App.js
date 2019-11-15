import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer/dnscontainer";

function App() {
  const rect1 = { x: 50, y: 50, width: 100, height: 100 };
  const rect2 = { x: 200, y: 50, width: 100, height: 100 };
  const rect3 = { x: 400, y: 60, width: 100, height: 100 };
  return (
    <div className="App">
      <DNSContainer rects={[rect1, rect2, rect3]} />
    </div>
  );
}

export default App;
