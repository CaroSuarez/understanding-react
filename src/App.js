import { useState } from "react";

import MemoAndCallback from "./components/memo-and-callback";

function App() {
  const [content, setContent] = useState("");
  return (
    <>
      <nav className="App">
        <button onClick={() => setContent("memoAndCallback")}>
          memo HOC and callBack Hook
        </button>
        <button onClick={() => setContent("")}>clear</button>
      </nav>
      {content === "memoAndCallback" && <MemoAndCallback />}
    </>
  );
}

export default App;
