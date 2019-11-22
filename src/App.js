import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import DNSImage from "./dnscontainer/dnsimage";
import firebase from "./firebase";

function App() {
  const [datas, setDatas] = React.useState([]);
  React.useState(() => {
    firebase
      .collection("ImageContents")
      .where("paperId", "==", "psd123")
      .onSnapshot((docQuery: any) => {
        if (docQuery.docs.length > 0) {
          let newDocs = [];
          docQuery.docs.forEach(doc => {
            const newDoc = {
              alt: doc.get("alt"),
              height: doc.get("height"),
              id: doc.id,
              index: doc.get("index"),
              paperId: doc.get("paperId"),
              scaledHeight: doc.get("scaledHeight"),
              scaledWidth: doc.get("scaledWidth"),
              selected: doc.get("selected"),
              src: doc.get("src"),
              translateX: doc.get("translateX"),
              translateY: doc.get("translateY"),
              type: doc.get("type"),
              width: doc.get("width"),
              x: doc.get("x"),
              y: doc.get("y")
            };
            newDocs.push(newDoc);
          });
          setDatas(newDocs);
        }
      });
  }, []);
  return (
    <div className="App">
      <button onClick={() => {}}>Click</button>
      <DNSContainer width={500} height={700}>
        {datas.map(data => {
          return (
            <DNSImage
              key={data.id}
              data={data}
              onChangeEnd={data => {
                console.log("Updated image", data);
              }}
            />
          );
        })}
      </DNSContainer>
    </div>
  );
}

export default App;
