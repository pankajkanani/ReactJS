import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("usestate");
  const ChangeName = () => {
    let val = name;
    if (val === "usestate") {
      setName("usestate tutorial");
    } else {
      setName("usestate");
    }
  };
  return (
    <div className="App">
      <h1>My Name is {name}</h1>
      <button type="button" className="btn btn-primary" onClick={ChangeName}>
        Click me
      </button>
    </div>
  );
}
