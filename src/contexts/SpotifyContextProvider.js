import React, { createContext, useRef, useState } from "react";
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
  const [songData, setSongData] = useState([
    {
      id: 1,
      title: "Style",
      singer: "Taylor Swift",
      cover: pic1,
      track: song1,
      active: false,
      isFavorite: false,
      isPlaying: false,
    },
    {
      id: 2,
      title: "Hate Me",
      singer: "Ellie Goulding",
      cover: pic2,
      track: song2,
      active: false,
      isFavorite: false,
      isPlaying: false,
    },
    {
      id: 3,
      title: "Ultraviolet",
      singer: "Lana Del Rey",
      cover: pic3,
      track: song3,
      active: false,
      isFavorite: false,
      isPlaying: false,
    },
  ]);
  // const [currentSong, setCurrentSong] = useState([]);

  // this state is for update 'isFavorite' immediately & in all components
  const [changed, setChanged] = useState(false);

  const songTrack = useRef();

  // play song
  const playHandle = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData.forEach((item) => {
      item.isPlaying = false;
      item.active = false;
    });
    newSongData[songIndex].active = true;
    newSongData[songIndex].isPlaying = true;
    songTrack.current.src = songData[songIndex].track;
    newSongData[songIndex].isPlaying && songTrack.current.play();
    setSongData(newSongData);
  };
  // add to favorite songs
  const toggleFavorite = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData[songIndex].isFavorite = !newSongData[songIndex].isFavorite;
    setChanged(!changed);
  };
  // go to next song
  // const nextSongHandle = () => {
  //   const newSongData = [...songData];
  //   newSongData.forEach((item) => {
  //     item.active = false;
  //     item.isPlaying = false;
  //   });
  //   songTrack.current.src = null;
  //   const currentIndex = songData.findIndex(
  //     (item) => item.id === currentSong[0].id
  //   );
  //   songTrack.current.src = [newSongData[currentIndex].track];
  //   newSongData[currentIndex].isPlaying = !newSongData[currentIndex].isPlaying;
  //   // newSongData[currentIndex + 1].active = true;
  //   songTrack.current.play();
  //   setCurrentSong([newSongData[currentIndex + 1]]);
  //   // setCurrentSong([songData[currentIndex + 1]]);
  //   if (songData.indexOf(currentSong[0]) === songData.length - 1) {
  //     setCurrentSong([songData[0]]);
  //   }
  // };
  // // go to previous song
  // const prevSongHandle = () => {
  //   const currentIndex = songData.findIndex(
  //     (item) => item.id === currentSong[0].id
  //   );
  //   const newSongData = [...songData];
  //   console.log([newSongData[currentIndex].track]);
  //   newSongData.forEach((item) => {
  //     item.active = false;
  //     item.isPlaying = false;
  //   });
  //   songTrack.current.src = null;
  //   // songTrack.current.src = [newSongData[currentIndex].track];
  //   newSongData[currentIndex].isPlaying = true;
  //   // setChanged(!changed);
  //   newSongData[currentIndex].active = true;
  //   setCurrentSong([newSongData[currentIndex - 1]]);
  //   songTrack.current.play();
  // };

  return (
    <SpotifyContext.Provider
      value={{
        songData,
        setSongData,
        songTrack,
        playHandle,
        toggleFavorite,
        // currentSong,
        // setCurrentSong,
        // nextSongHandle,
        // prevSongHandle,
      }}
    >
      {/* song source */}
      {/* <audio ref={songTrack} onEnded={nextSongHandle}></audio> */}
      <audio ref={songTrack}></audio>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContextProvider;
