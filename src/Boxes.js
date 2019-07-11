import React, {useState} from "react";
import superb from "superb";
import AnimatedVisibility from "./AnimatedVisibility";

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
  const [color] = useState(colors[Math.floor(Math.random() * 9)]);
  const [visible, setVisible] = useState(true);

  function hideMe() {
    setVisible(false);
  }

  let style = { borderColor: color, backgroundColor: color };

  return (
    <AnimatedVisibility
      visible={visible}
      animationIn="zoomIn"
      animationOut="zoomOut"
    >
      <div className="box" style={style}>
        <div className="center">{word}</div>
        <button className="bottom-corner" onClick={hideMe}>
          <i className="center far fa-eye fa-lg" />
        </button>
      </div>
    </AnimatedVisibility>
  );
}

export default function Boxes() {
  const startingWords = [];
  for (let i = 0; i < 12; i++) {
    startingWords[i] = superb.random();
  }
  const [words] = useState(startingWords);

  return (
    <div className="boxes">
      {words.map(word => (
        <Box key={word} word={word} />
      ))}
    </div>
  );
}

