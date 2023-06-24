import "./index.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 20 2023");
  date.setDate(date.getDate() + count);

  function incCount() {
    setCount((s) => s + step);
  }
  function decCount() {
    setCount((s) => s - step);
  }
  function incStep() {
    setStep((p) => p + 1);
  }
  function decStep() {
    setStep((p) => p - 1);
  }

  return (
    <div>
      <div>
        <span>
          <button onClick={decStep}>-</button>
          <span>Step: {step}</span>
          <button onClick={incStep}>+</button>
        </span>
      </div>
      <div>
        <span>
          <button onClick={decCount}>-</button>
          <span>Count: {count}</span>
          <button onClick={incCount}>+</button>
        </span>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
