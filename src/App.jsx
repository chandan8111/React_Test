import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User,{Profile} from "./user";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello />
      <h3>Sum of 5 + 5 : {sum()}</h3>
      <h1>Counter Vol : {count}</h1>
      <User />
      <Profile />
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Counter
      </button>
    </>
  );
}

function Hello() {
  return <h1>Code By Me</h1>;
}

function sum() {
  return 5 + 5;
}

export default App;
