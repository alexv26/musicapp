import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-[#002137] flex items-center justify-center">
        <div className="bg-[#00263f] text-[#e0e1dd] p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Header</h1>
          <p className="text-base">Body text</p>
        </div>
      </div>
    </>
  );
}

export default App;
