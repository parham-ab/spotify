import React, { createContext, useState } from "react";
// song
import song1 from "../assets/music/taylor-style.mp3";
import song2 from "../assets/music/Ellie-Goulding-Hate-Me.mp3";
import song3 from "../assets/music/lana-ulteraviolet.mp3";
// img
import pic1 from "../assets/img/taylor.jfif";
import pic2 from "../assets/img/ellie.jfif";
import pic3 from "../assets/img/lana.jfif";
// context
export const SpotifyContext = createContext();

const SpotifyContextProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Style",
      singer: "Taylor Swift",
      cover: pic1,
      track: song1,
      active: true,
      isFavorite: false,
    },
    {
      id: 2,
      title: "Hate Me",
      singer: "Ellie Goulding",
      cover: pic2,
      track: song2,
      active: false,
      isFavorite: false,
    },
    {
      id: 3,
      title: "Ultraviolet",
      singer: "Lana Del Rey",
      cover: pic3,
      track: song3,
      active: false,
      isFavorite: false,
    },
  ]);

  return (
    <SpotifyContext.Provider value={data}>{children}</SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;
