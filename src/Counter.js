import { useState,useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
 useEffect(()=>{
  return ()=>{
    console.log("Unmounting")
  }
 },[count])
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {count>10 && <p> Count is greater than 10</p>}
    </div>
  );
}

export default Counter;