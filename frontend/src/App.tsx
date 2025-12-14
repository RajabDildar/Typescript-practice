import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Joke from "./components/joke";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <div>
        <Button
          text="Click Me to have alert!"
          onClick={() => alert("You clicked the button!")}
        />
        <Button text={`count = ${count}`} onClick={() => setCount(count + 1)} />
        <Button text="Click Me and see console!" />
      </div>
      <div>
        <Joke />
      </div>
    </>
  );
}

export default App;
