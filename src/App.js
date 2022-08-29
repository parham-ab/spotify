import React from "react";
// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SongsList from "./components/songsList";
// context
import SpotifyContextProvider from "./contexts/SpotifyContextProvider";

const App = () => {
  return (
    <SpotifyContextProvider>
      <Header />
      <div className="d-flex" style={{ height: "60vh" }}>
        <div className="col-lg-2 col-md-3 ">
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-7" style={{ overflow: "auto" }}>
          <SongsList />
        </div>
      </div>
    </SpotifyContextProvider>
  );
};

export default App;
