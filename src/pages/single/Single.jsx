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
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
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
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
