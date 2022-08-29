import { useContext, useRef } from "react";
// context
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";
// icons
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Song = ({ item }) => {
  const songData = useContext(SpotifyContext);
  const songTrack = useRef();
  // play song
  const playHandle = (id) => {
    songTrack.current.play();
    const songIndex = songData.findIndex((item) => item.id === id);
    console.log(songIndex);
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
      <audio src={item.track} ref={songTrack} controls></audio>
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

      <div className="song-list-options d-none d-sm-block">
        <MdOutlineFavoriteBorder />
      </div>
    </div>
  );
};

export default Song;
