import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import { Link } from "react-router-dom";


const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Pharmacy Store</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Нүүр хуудас</span>
          </li>
          <li>
            <LibraryAddOutlinedIcon className="icon" />
            <span>POS хэвлэлт</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Хэрэглэгчид</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Бүтээгдэхүүн</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Жагсаалт</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Статистик</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Мэдэгдэл</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Тохиргоо</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Хувийн мэдээлэл</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Гарах</span>
          </li>
        </ul>
      </div>
      <div className="bottom">

      </div>
    </div>
  );
};

export default Sidebar;
