import { useState } from "react";

import MemoAndCallback from "./components/memo-and-callback";
import FormComponent from "./components/useRef";

function App() {
  const [content, setContent] = useState("");
  return (
    <>
      <nav className="App">
        <button onClick={() => setContent("memoAndCallback")}>
          memo HOC and callBack Hook
        </button>
        <button onClick={() => setContent("useRefExample")}>
          useRef Example
        </button>
        <button onClick={() => setContent("")}>clear</button>
      </nav>
      {content === "memoAndCallback" && <MemoAndCallback />}
      {content === "useRefExample" && <FormComponent />}
    </>
  );
}

export default App;
