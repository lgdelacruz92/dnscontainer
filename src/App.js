import React from "react";
import "./App.css";
import DNSContainer from "./dnscontainer";
import DNSImage from "./dnscontainer/dnsimage";
import firebase from "./firebase";
import DNSText from "./dnscontainer/dnstext";

const formatToImageObj = doc => {
  return {
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
};

const formatToTextDoc = doc => {
  return {
    color: doc.get("color"),
    fontFamily: doc.get("fontFamily"),
    fontSize: doc.get("fontSize"),
    fontStyle: doc.get("fontStyle"),
    fontWeight: doc.get("fontWeight"),
    id: doc.id,
    index: doc.get("index"),
    paperId: doc.get("paperId"),
    text: doc.get("text"),
    textAlign: doc.get("textAlign"),
    textDecoration: doc.get("textDecoration"),
    type: doc.get("type"),
    x: doc.get("x"),
    y: doc.get("y")
  };
};

function App() {
  const [datas, setDatas] = React.useState([]);
  React.useState(() => {
    firebase
      .collection("ImageContents")
      .where("paperId", "==", "psd123")
      .onSnapshot(docQuery => {
        let newDocs = [];
        if (docQuery.docs.length > 0) {
          docQuery.docs.forEach(doc => {
            const newDoc = formatToImageObj(doc);
            newDocs.push(newDoc);
          });
        }

        firebase
          .collection("TextContents")
          .where("paperId", "==", "psd123")
          .onSnapshot(docQueryText => {
            if (docQueryText.docs.length > 0) {
              docQueryText.docs.forEach(doc => {
                const newDoc = formatToTextDoc(doc);
                newDocs.push(newDoc);
              });
            }
            setDatas(newDocs);
          });
      });
  }, []);
  return (
    <div className="App">
      <button
        onClick={() => {
          firebase
            .collection("ImageContents")
            .doc()
            .set({
              x: 50,
              y: 200,
              translateX: 0,
              translateY: 0,
              scaledWidth: 100,
              scaledHeight: 100,
              width: 100,
              height: 100,
              src: "https://source.unsplash.com/random/1000x1000",
              alt: "random",
              id: "unique-id-123",
              index: 2,
              type: "image",
              paperId: "psd123"
            });
        }}
      >
        Click
      </button>
      <DNSContainer width={500} height={700}>
        {datas.map(data => {
          if (data.type === "image") {
            return (
              <DNSImage key={data.id} data={data} onChangeEnd={data => {}} />
            );
          } else if (data.type === "text") {
            return (
              <DNSText key={data.id} data={data} onChangeEnd={data => {}} />
            );
          } else {
            return null;
          }
        })}
      </DNSContainer>
    </div>
  );
}

export default App;
