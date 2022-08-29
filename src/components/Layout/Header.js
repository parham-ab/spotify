import React from "react";
// icons
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import {
  MdFavorite,
  MdOutlineFavoriteBorder,
  MdNavigateNext,
  MdArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
// img
import pic1 from "../../assets/img/taylor.jfif";

const Header = () => {
  return (
    <header className="header-container">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center m-auto">
            {/* cover */}
            <div className="d-none d-sm-block m-4">
              <div
                className="song-cover d-flex align-items-center justify-content-center"
                style={{ backgroundImage: `url(${pic1})` }}
              >
                <div>
                  <BsPlayFill className="main-status-icon" />
                </div>
              </div>
            </div>
            {/* song info */}
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <h3>song title</h3>
                  <h6>singer</h6>
                </div>
                {/* favorite button */}
                <div>
                  <MdOutlineFavoriteBorder className="favorite-toggle" />
                </div>
              </div>

              <div className="song-range-time">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="song-time current-time">00:00</span>
                  <span className="song-time full-time">00:00</span>
                </div>
                <input
                  type="range"
                  step={1}
                  max={100}
                  min={0}
                  className="w-100"
                />
              </div>
              <div className="mt-4 header-btn-handler">
                <MdOutlineArrowBackIosNew />
                <BsPlayFill style={{ margin: "0 10px" }} />
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
