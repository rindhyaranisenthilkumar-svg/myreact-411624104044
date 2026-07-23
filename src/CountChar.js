import { useState } from "react";

function CountChar() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Character Count: {text.length}</p>

      {text.length < 3 && <p>Enter more characters</p>}
    </div>
  );
}

export default CountChar;