import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Хайх..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
       <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <MenuRoundedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/278968686_1901202163407089_1361302335978599199_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=qRoq5YbmBHgAX9gRoIv&_nc_ht=scontent.fuln8-1.fna&oh=00_AfBYM9W3_tZGnZIatOrMfHf3HAGgvzyH-Tj_h2HEIREpdA&oe=63896FA8"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
