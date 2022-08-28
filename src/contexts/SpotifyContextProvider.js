import React, { createContext, useState } from "react";
// context
export const SpotifyContext = createContext();

const SpotifyContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <SpotifyContext.Provider value={data}>{children}</SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;
