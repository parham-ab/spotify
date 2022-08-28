import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
// context
import SpotifyContextProvider from "./contexts/SpotifyContextProvider";

const App = () => {
  return (
    <SpotifyContextProvider>
      <Header />
      <Sidebar />
      <Main />
    </SpotifyContextProvider>
  );
};

export default App;
