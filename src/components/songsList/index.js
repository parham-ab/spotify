// components
import AllSongs from "./AllSongs";

const SongsList = () => {
  return (
    <div className="col-lg-10 col-md-7" style={{ overflow: "auto" }}>
      <AllSongs />
    </div>
  );
};
export default SongsList;