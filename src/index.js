import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>计数：{count}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
