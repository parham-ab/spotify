// context
import { useContext } from "react";
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";
// components
import Song from "./Song";

const AllSongs = () => {
  const songData = useContext(SpotifyContext);

  return (
    <>
      {songData.map((item) => (
        <Song item={item} key={item.id} />
      ))}
    </>
  );
};

export default AllSongs;
