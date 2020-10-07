import React from "react";
import "./App.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Recommended from "./components/Recommended";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app-page">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
