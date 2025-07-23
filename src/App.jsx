import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="tile">
          <h1>Header</h1>
          <p>Body text</p>
        </div>
      </div>
    </>
  );
}

export default App;
