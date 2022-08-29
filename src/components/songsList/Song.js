import { useContext, useEffect, useRef } from "react";
// context
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";
// icons
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const Song = ({ item }) => {
  const { songData, setSongData } = useContext(SpotifyContext);
  const songTrack = useRef();

  // play song
  const playHandle = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData.forEach((item) => {
      item.isPlaying = false;
      item.active = false;

      // console.log(songTrack.current.src);
    });
    newSongData[songIndex].active = true;
    newSongData[songIndex].isPlaying = true;
    songTrack.current.src = songData[songIndex].track;
    newSongData[songIndex].isPlaying && songTrack.current.play();
    setSongData(newSongData);
    // console.log(songTrack.current.src);
  };
  // add to favorite songs
  const toggleFavorite = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData[songIndex].isFavorite = !newSongData[songIndex].isFavorite;
    console.log(newSongData[songIndex].isFavorite);
  };

  return (
    <div
      onClick={() => playHandle(item.id)}
      className={
        item.active
          ? "songLists d-flex align-items-center justify-content-between p-3 m-3 active-item"
          : "songLists d-flex align-items-center justify-content-between p-3 m-3"
      }
    >
      {/* song source */}
      <audio ref={songTrack} controls></audio>
      <div className="d-flex align-items-center">
        <div
          className="song-list-cover d-sm-block d-none"
          style={{ backgroundImage: `url(${item.cover})` }}
        ></div>
        <div className="song-list-info d-flex align-items-center flex-column p-2">
          <h3 className="fw-bold" style={{ wordBreak: "break-all" }}>
            {item.title}
          </h3>
          <h6 className="text-success" style={{ wordBreak: "break-all" }}>
            {item.singer}
          </h6>
        </div>
      </div>

      <div
        className="song-list-options d-none d-sm-block"
        onClick={() => toggleFavorite(item.id)}
      >
        {item.isFavorite ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
      </div>
    </div>
  );
};

export default Song;
