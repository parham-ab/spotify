import React from "react";
// icons
import { MdOutlineFavoriteBorder } from "react-icons/md";
import me from "../../assets/img/me.jpg";

const SongsList = () => {
  return (
    <div className="songLists d-flex align-items-center justify-content-between p-3">
      <div className="d-flex align-items-center">
        <div
          className="song-list-cover d-sm-block d-none"
          style={{ backgroundImage: `url(${me})` }}
        ></div>
        <div className="song-list-info d-flex align-items-center flex-column flex-md-row">
          <h3 className="px-0 px-sm-5 fw-bold">singer</h3>
          <h6>song name</h6>
        </div>
      </div>

      <div className="song-list-options">
        <MdOutlineFavoriteBorder />
      </div>
    </div>
  );
};

export default SongsList;
