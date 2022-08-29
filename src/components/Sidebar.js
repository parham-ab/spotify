import React from "react";
// icons
import { BsSpotify, BsFillInfoCircleFill } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="aside-container h-100">
      <div className="d-flex align-items-center p-4">
        <div>
          <BsSpotify
            style={{
              fontSize: "27px",
              color: "rgb(29 185 84)",
              cursor: "auto",
            }}
          />
        </div>
        <div>
          <h4 className="p-1">Spotify</h4>
        </div>
      </div>
      <div>
        <ul className="sidebar-list">
          <li className="d-flex align-items-center">
            <a href="#">
              <SiApplemusic className="m-1" />
              All Songs
            </a>
          </li>

          <li className="d-flex align-items-center">
            <a href="#">
              <MdFavorite className="m-1" />
              Favorites
            </a>
          </li>

          <li className="d-flex align-items-center">
            <a href="#">
              <IoMdContact className="m-1" />
              Contact us
            </a>
          </li>

          <li>
            <a href="#">
              <BsFillInfoCircleFill className="m-1" />
              About Us
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
