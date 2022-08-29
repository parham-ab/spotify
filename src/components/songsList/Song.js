// icons
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Song = ({ item }) => {
  return (
    <div
      className="songLists d-flex align-items-center justify-content-between p-3"
      //   active-item class
    >
      <div className="d-flex align-items-center">
        <div
          className="song-list-cover d-sm-block d-none"
          style={{ backgroundImage: `url(${item.cover})` }}
        ></div>
        <div className="song-list-info d-flex align-items-center flex-column p-2">
          <h3 className="fw-bold">{item.title}</h3>
          <h6 className="text-success">{item.singer}</h6>
        </div>
      </div>

      <div className="song-list-options d-none d-sm-block">
        <MdOutlineFavoriteBorder />
      </div>
    </div>
  );
};

export default Song;
