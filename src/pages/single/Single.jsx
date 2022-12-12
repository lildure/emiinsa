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
                src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-1/317364885_2073953366131967_2007919634147710899_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHKYSSN6K0DT_-C6PIEw8QPD9CvJJyqGLcP0K8knKoYt_Gr66vmc9u-jgIzzeAuGinlLx76iQFTmLvi5sYR_5ON&_nc_ohc=uRSuI0LhjU8AX_s-JUH&tn=O-cr1Kzgsy8kCARL&_nc_ht=scontent.fuln2-2.fna&oh=00_AfDZrss1o4T5IPaBo71A-6MH09kNWD_n7sBTKV_ptiuolQ&oe=639B08A1"
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
