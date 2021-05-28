import React, { useState } from "react";
import { Ubergram } from "./components/Ubergram";

const App = () => {
  const [state, setState] = useState([]);

  return (
    <div className="app">
      <Ubergram state={state} setState={setState} />
    </div>
  );
};

export default App;
