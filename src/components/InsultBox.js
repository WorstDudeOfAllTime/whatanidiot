import "./InsultBox.css";
import { useState } from "react";
const InsultBox = () => {
  const [insultState, setInsultState] = useState(
    require("shakespeare-insult").random()
  );
  return (
    <div className="insultBox flexCentCol">
      <h1>{insultState}</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          setInsultState(require("shakespeare-insult").random());
        }}
      >
        What an idiot.
      </button>
    </div>
  );
};

export default InsultBox;
