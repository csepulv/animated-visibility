import React, { useState } from "react";
import superb from "superb";
import { Animated } from "react-animated-css";
import "./App.css";

const colors = [
  "#6690FF",
  "#6CD566",
  "#50E5FF",
  "#FFDC75",
  "#FF7C83",
  "#FF702D",
  "#FFAA42",
  "#7F7B82",
  "#4D7EA8"
];

function Box({ word }) {
  const color = colors[Math.floor(Math.random() * 9)];
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  function hideMe() {
    setFading(true);
    setTimeout(() => setVisible(false), 650);
  }

  let style = { borderColor: color, backgroundColor: color };

  return (
    <Animated
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={!fading}
      style={visible ? null : { display: "none" }}
    >
      <div className="box" style={style}>
        <div className="center">{word}</div>
        <button className="button bottom-corner" onClick={hideMe}>
          <i className="center far fa-eye fa-lg" />
        </button>
      </div>
    </Animated>
  );
}

function App() {
  const words = [];
  for (let i = 0; i < 12; i++) {
    words[i] = superb.random();
  }

  return (
    <div className="frame">
      {words.map(word => (
        <Box key={word} word={word} />
      ))}
    </div>
  );
}

export default App;
