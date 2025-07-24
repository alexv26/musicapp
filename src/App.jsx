import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-[var(--color-background)] flex items-center justify-center">
        <div className="bg-[var(--color-box)] text-[var(--color-text)] p-8 rounded-2xl shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Header</h1>
          <p className="text-base">Body text</p>
        </div>
      </div>
    </>
  );
}

export default App;
