import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  useEffect(() => {
    axios.get("/api").then((res) => {
      setText(res.data);
      console.log("OK");
    });
  }, []);
  return (
    <div className="App">
      <p>{text}</p>
    </div>
  );
}

export default App;
