import "./App.css";
import { useState } from "react";
import Condion from "./components/condition";

// import Dashboard from "./dashboard";
function App() {
  const [moo, setMoo] = useState(0);
  return (
    <div>
      <button onClick={() => setMoo(moo + 1)} style={"align:center"}>
        change
      </button>
      <Condion moo={moo} />
    </div>
  );
}
export default App;
