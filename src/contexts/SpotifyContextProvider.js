import React, { createContext, useState } from "react";
// img

// context
export const SpotifyContext = createContext();

const SpotifyContextProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      singer: "",
      cover: "",
      track: "",
      active: true,
      isFavorite: false,
    },
    {
      id: 2,
      singer: "",
      cover: "",
      track: "",
      active: false,
      isFavorite: false,
    },
    {
      id: 3,
      singer: "",
      cover: "",
      track: "",
      active: false,
      isFavorite: false,
    },
  ]);

  return (
    <SpotifyContext.Provider value={data}>{children}</SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;
