import React from "react";
// icons
import { MdOutlineFavoriteBorder } from "react-icons/md";
import me from "../../assets/img/me.jpg";

const AllSongs = () => {
  return (
    <div className="songLists d-flex align-items-center justify-content-between p-3">
      <div className="d-flex align-items-center">
        <div
          className="song-list-cover d-sm-block d-none"
          style={{ backgroundImage: `url(${me})` }}
        ></div>
        <div className="song-list-info d-flex align-items-center flex-column p-2">
          <h3 className="fw-bold">singer</h3>
          <h6 className="text-success">song name</h6>
        </div>
      </div>

      <div className="song-list-options d-none d-sm-block">
        <MdOutlineFavoriteBorder />
      </div>
    </div>
  );
};

export default AllSongs;
