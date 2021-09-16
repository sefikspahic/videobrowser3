import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Search from "./Search";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";

function App() {
  const [find, setFind] = useState("The Simpsons - Homer lie detector");
  return (
    <div>
      <Search setFind={setFind}/>
      <VideoList find={find} setFind={setFind}/>
      <VideoDetails />
      
    </div>
  );
}

export default App;
