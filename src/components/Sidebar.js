import React from "react";
// icons
import { BsSpotify, BsFillInfoCircleFill } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="aside-container">
      <div className="d-flex align-items-center p-4">
        <BsSpotify
          style={{ fontSize: "27px", color: "rgb(29 185 84)", cursor: "auto" }}
        />
        <h4 className="p-1">Spotify</h4>
      </div>
      <div>
        <ul className="sidebar-list">
          <a href="#">
            <li className="d-flex align-items-center">
              <SiApplemusic className="m-1" />
              All Songs
            </li>
          </a>

          <a href="#">
            <li className="d-flex align-items-center">
              <MdFavorite className="m-1" />
              Favorites
            </li>
          </a>

          <a href="#">
            <li className="d-flex align-items-center">
              <IoMdContact className="m-1" />
              Contact us
            </li>
          </a>

          <a href="#">
            <li>
              <BsFillInfoCircleFill className="m-1" />
              About Us
            </li>
          </a>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
