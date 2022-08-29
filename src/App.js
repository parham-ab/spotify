import React from "react";
// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// context
import SpotifyContextProvider from "./contexts/SpotifyContextProvider";

const App = () => {
  return (
    <SpotifyContextProvider>
      <Header />
      <div className="d-flex" style={{ height: "62vh" }}>
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-4">
          <Main />
        </div>
      </div>
    </SpotifyContextProvider>
  );
};

export default App;
