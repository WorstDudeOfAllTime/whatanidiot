import logo from "./logo.svg";
import "./App.css";
import PictureDisplay from "./components/PictureDisplay";
import InsultBox from "./components/InsultBox";

function App() {
  return (
    <div className="App flexCentCol">
      <div className="container flexCentCol">
        <PictureDisplay />
        <InsultBox />
      </div>
    </div>
  );
}

export default App;
