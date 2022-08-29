// components
import AllSongs from "./AllSongs";

const SongsList = () => {
  return (
    <div className="col-md-9 col-sm-7 col-6" style={{ overflow: "auto" }}>
      <AllSongs />
    </div>
  );
};
export default SongsList;
