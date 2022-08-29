import { useContext, useEffect, useRef } from "react";
// context
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";
// icons
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const Song = ({ item }) => {
  const { songData, setSongData, songTrack } = useContext(SpotifyContext);

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
    console.log(newSongData[songIndex].isFavorite);
  };

  return (
    <div
      className={
        item.active
          ? "songLists d-flex align-items-center justify-content-between p-3 m-3 active-item"
          : "songLists d-flex align-items-center justify-content-between p-3 m-3"
      }
    >
      <div className="d-flex align-items-center">
        <div
          onClick={() => playHandle(item.id)}
          className={
            item.active
              ? "song-list-cover d-sm-block d-none spinner"
              : "song-list-cover d-sm-block d-none"
          }
          style={{ backgroundImage: `url(${item.cover})`, cursor: "pointer" }}
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
