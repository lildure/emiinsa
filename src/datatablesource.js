export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//Хэрэглэгчийн дата
export const userRows = [
  {
    id: 1,
    username: "durehuu",
    img: "https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-1/317364885_2073953366131967_2007919634147710899_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHKYSSN6K0DT_-C6PIEw8QPD9CvJJyqGLcP0K8knKoYt_Gr66vmc9u-jgIzzeAuGinlLx76iQFTmLvi5sYR_5ON&_nc_ohc=uRSuI0LhjU8AX_s-JUH&tn=O-cr1Kzgsy8kCARL&_nc_ht=scontent.fuln2-2.fna&oh=00_AfDZrss1o4T5IPaBo71A-6MH09kNWD_n7sBTKV_ptiuolQ&oe=639B08A1",
    status: "active",
    email: "duurenjargal@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "tengid",
    img: "",
    email: "tengis01@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "ezio",
    img: "",
    email: "erdenemandal@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "ujin",
    img: "",
    email: "ujiin@gmail.com",
    status: "active",
    age: 16,
  },
];
