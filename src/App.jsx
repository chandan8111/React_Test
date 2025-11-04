import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./user";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Code By Me</h1>
      
      <h1>Counter Vol : {count}</h1>
      <User />
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Counter
      </button>
    </>
  );
}

export default App;
