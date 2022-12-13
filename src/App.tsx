import * as React from "react";
import NewsFeed from "./components/News";
import "./App.css";

function App(): React.ReactElement {
  return (
    <div className="App">
      <NewsFeed />
    </div>
  );
}

export default App;
