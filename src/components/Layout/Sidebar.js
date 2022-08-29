import React from "react";
// icons
import { BsSpotify, BsFillInfoCircleFill } from "react-icons/bs";
import { SiApplemusic } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const Sidebar = () => {
  const sidebarData = [
    {
      path: "/",
      icon: <SiApplemusic className="m-1" />,
      menuText: "All Songs",
    },
    {
      path: "/favorites",
      icon: <MdFavorite className="m-1" />,
      menuText: "Favorites",
    },
    {
      path: "/contact-us",
      icon: <IoMdContact className="m-1" />,
      menuText: "Contact us",
    },
    {
      path: "/about-us",
      icon: <BsFillInfoCircleFill className="m-1" />,
      menuText: "About us",
    },
  ];
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
          {sidebarData.map((item, index) => (
            <li key={index}>
              {item.icon}
              <a href={item.path}>{item.menuText}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
