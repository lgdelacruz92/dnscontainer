import React from "react";
import "./App.css";
import DNSContainer, { DNSImage } from "./dnscontainer";
import { imageData } from "./dnscontainer/data";

function App() {
  const [data, setImageData] = React.useState(imageData);
  const [history, setHistory] = React.useState([]);
  const [historyPos, setHistoryPos] = React.useState(-1);
  React.useEffect(() => {
    let cmdClickedTime = 0;
    const onUndo = e => {
      if (e.key === "Meta") {
        cmdClickedTime = Date.now();
      }

      if (e.key === "z") {
        if (Date.now() - cmdClickedTime < 1000) {
          if (historyPos > 0) {
            setImageData({ ...history[historyPos - 1].data });
            setHistoryPos(historyPos - 1);
          }
        }
      }
    };
    document.addEventListener("keydown", onUndo);
    return () => document.removeEventListener("keydown", onUndo);
    // eslint-display-next-line
  }, [historyPos]);
  return (
    <div className="App">
      <DNSContainer width={500} height={700}>
        <DNSImage
          data={data}
          onChangeEnd={(e, newImageData) => {
            if (history.length > 10) {
              history.splice(0, 1);
            }
            if (historyPos >= 0) {
              history.splice(historyPos + 1);
            }
            history.push({ action: "data-change", data: { ...newImageData } });
            setHistoryPos(historyPos + 1);
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
