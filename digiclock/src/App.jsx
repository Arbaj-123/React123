import React from "react";
import { useState } from "react";

const App = () => {
  const [initialval, setInitialVal] = useState(new Date().toLocaleTimeString());
  // setInitialVal(new Date().toLocaleTimeString());
  // setInitialVal(new Date().toLocaleTimeString());
  setInterval(() => {
    // alert("Hello");
    setInitialVal(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <>
      <div>
        <h3>Current Time is {initialval}</h3>
      </div>
    </>
  );
};

export default App;
