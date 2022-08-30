import React, { useContext, useEffect, useState } from "react";
// icons
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import {
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdNavigateNext,
  MdArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
// context
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";

const Header = () => {
  const { songData, setSongData, songTrack } = useContext(SpotifyContext);
  const [currentSong, setCurrentSong] = useState([]);
  const [changed, setChanged] = useState(false);
  const [songTimeLive, setSongTimeLive] = useState(0);
  const [songTimeFull, setSongTimeFull] = useState(0);
  // readable song time function
  const readableTime = (time) => {
    return `${Math.trunc(time / 60)} : ${("0" + Math.trunc(time % 60)).slice(
      -2
    )}`;
  };

  useEffect(() => {
    const playingSong = songData.filter((item) => item.isPlaying);
    setCurrentSong(playingSong);
  }, [songData]);
  useEffect(() => {
    setInterval(() => {
      setSongTimeLive(songTrack.current.currentTime);
      setSongTimeFull(songTrack.current.duration);
    }, 1000);
  }, [currentSong]);
  // play song
  const playHandle = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData[songIndex].isPlaying = !newSongData[songIndex].isPlaying;
    if (newSongData[songIndex].isPlaying) {
      songTrack.current.play();
      setChanged(!changed);
      return;
    } else {
      songTrack.current.pause();
      setChanged(!changed);
    }
  };
  // add to favorite songs
  const toggleFavorite = (id) => {
    const songIndex = songData.findIndex((item) => item.id === id);
    const newSongData = [...songData];
    newSongData[songIndex].isFavorite = !newSongData[songIndex].isFavorite;
    setChanged(!changed);
  };

  return (
    <header className="header-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          {currentSong.map((item) => (
            <div className="d-flex align-items-center m-auto" key={item.id}>
              {/* cover */}
              <div className="d-none d-sm-block m-4">
                <div
                  key={item.id}
                  className="song-cover d-flex align-items-center justify-content-center"
                  style={{ backgroundImage: `url(${item.cover})` }}
                >
                  <div onClick={() => playHandle(item.id)}>
                    {!item.isPlaying ? (
                      <BsPlayFill className="main-status-icon" />
                    ) : (
                      <BsPauseFill className="main-status-icon" />
                    )}
                  </div>
                </div>
              </div>
              {/* song info */}
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h3>{item.title}</h3>
                    <h6>{item.singer}</h6>
                  </div>
                  {/* favorite button */}
                  <div onClick={() => toggleFavorite(item.id)}>
                    {item.isFavorite ? (
                      <MdFavorite className="favorite-toggle" />
                    ) : (
                      <MdOutlineFavoriteBorder className="favorite-toggle" />
                    )}
                  </div>
                </div>

                <div className="song-range-time">
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="song-time current-time">
                      {readableTime(songTimeLive)}
                    </span>
                    <span className="song-time full-time">
                      {readableTime(songTimeFull) === "NaN : aN"
                        ? "0 : 00"
                        : readableTime(songTimeFull)}
                    </span>
                  </div>
                  <input
                    type="range"
                    step={1}
                    max={!!songTimeFull && songTimeFull}
                    min={0}
                    value={songTimeLive}
                    onChange={(e) =>
                      (songTrack.current.currentTime = e.target.value)
                    }
                    className="w-100"
                  />
                </div>
                <div className="mt-4 header-btn-handler d-flex align-items-center">
                  <MdOutlineArrowBackIosNew />
                  <div onClick={() => playHandle(item.id)}>
                    {item.isPlaying ? (
                      <BsPauseFill style={{ margin: "0 10px" }} />
                    ) : (
                      <BsPlayFill style={{ margin: "0 10px" }} />
                    )}
                  </div>
                  <MdArrowForwardIos />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
