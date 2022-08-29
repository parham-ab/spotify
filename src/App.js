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
      <Sidebar />
      <Main />
    </SpotifyContextProvider>
  );
};

export default App;
