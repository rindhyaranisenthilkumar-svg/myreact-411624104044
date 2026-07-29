import MyCounter from "./Counter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/counter" element={<MyCounter />} />
        <Route path="*" element={<h1>Incorrect Path</h1>} />
      </Routes>
    </>
  );
}

export default App;
