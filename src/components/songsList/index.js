// context
import { useContext } from "react";
import { SpotifyContext } from "../../contexts/SpotifyContextProvider";
// components
import Song from "./Song";

const SongsList = () => {
  const { songData } = useContext(SpotifyContext);

  return (
    <div className="col-md-9 col-sm-7 col-6" style={{ overflow: "auto" }}>
      {songData.map((item) => (
        <Song item={item} key={item.id} />
      ))}
    </div>
  );
};
export default SongsList;
