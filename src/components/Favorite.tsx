import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";

const Favorite = () => {
  return (
    <Link to="/favorites">
      <IoMdHeart />
    </Link>
  );
};

export default Favorite;
