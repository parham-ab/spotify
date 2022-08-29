import React from "react";
import Layout from "./components/Layout";
// components
import SongsList from "./components/songsList";
// context
import SpotifyContextProvider from "./contexts/SpotifyContextProvider";

const App = () => {
  return (
    <SpotifyContextProvider>
      <Layout>
        <div className="col-lg-10 col-md-7" style={{ overflow: "auto" }}>
          <SongsList />
        </div>
      </Layout>
    </SpotifyContextProvider>
  );
};

export default App;
