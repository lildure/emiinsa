import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">засах</div>
            <h1 className="title">Мэдээлэл</h1>
            <div className="item">
              <img
                src="https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/278968686_1901202163407089_1361302335978599199_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=qRoq5YbmBHgAX9gRoIv&_nc_ht=scontent.fuln8-1.fna&oh=00_AfBYM9W3_tZGnZIatOrMfHf3HAGgvzyH-Tj_h2HEIREpdA&oe=63896FA8"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Даваадорж Дүүрэнжаргал</h1>
                <div className="detailItem">
                  <span className="itemKey">Майл:</span>
                  <span className="itemValue">duuree@gmail@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Утасны дугаар:</span>
                  <span className="itemValue">+976 89963214</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Хаяг:</span>
                  <span className="itemValue">
                    18-р хороо БГД. УБ
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Улс:</span>
                  <span className="itemValue">Монгол</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Ажилчны зарцуулалт (Сүүлийн 6 сар)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Их борлуулалтай бараанууд</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
