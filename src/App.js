import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
// components
import SongsList from "./components/songsList";
// context
import SpotifyContextProvider from "./contexts/SpotifyContextProvider";

const App = () => {
  return (
    <SpotifyContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<SongsList />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </SpotifyContextProvider>
  );
};

export default App;
