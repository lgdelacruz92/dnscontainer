import React from "react";
import "./App.css";
import DNSContainer, { DNSImage } from "./dnscontainer";
import { imageData } from "./dnscontainer/data";

function App() {
  const [data, setImageData] = React.useState(imageData);
  const [history, setHistory] = React.useState([]);
  React.useEffect(() => {
    let cmdClickedTime = 0;
    const onUndo = e => {
      if (e.key === "Meta") {
        cmdClickedTime = Date.now();
      }

      if (e.key === "z") {
        if (Date.now() - cmdClickedTime < 1000) {
        }
      }
    };
    document.addEventListener("keydown", onUndo);
    return () => document.removeEventListener("keydown", onUndo);
    // eslint-display-next-line
  }, []);
  return (
    <div className="App">
      <DNSContainer width={500} height={700}>
        <DNSImage
          data={data}
          onChangeEnd={newImageData => {
            if (history.length > 10) {
              history.splice(0, 1);
            }
            history.push({ action: "data-change", data: newImageData });
            setHistory([...history]);
          }}
          onRemove={data => {
            console.log("Remove", data);
          }}
        />
      </DNSContainer>
    </div>
  );
}

export default App;
