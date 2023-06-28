import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Botton from "./components/button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="App
  ">
        {" "}
        <h1 className="title">Be Crazy with git hub</h1>
        <p className="description">
          Exercise to get confident with all the command{" "}
        </p>
        <Botton />
      </div>
    </>
  );
}

export default App;
