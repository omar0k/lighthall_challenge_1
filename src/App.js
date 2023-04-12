import { useState } from "react";
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div>
        <Button onClick={handleClick} />
        <Counter count={count} />
      </div>
    </div>
  );
}

export default App;
