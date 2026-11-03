import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>My First React Counter</h2>

      <p>Count: {count}</p>
      
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Decrease
        </button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div>
        {" "}
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;

// function Counter() {
//   let count = 0;
// //  THIS WORKS INLINE
// return (
//   <button onClick={() => {
//     count++;
//     console.log("Inline log:", count);
//   }}>
//     {count}
//   </button>
// );
