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

//temporary data
export const userRows = [
  {
    id: 1,
    username: "durehuu",
    img: "https://scontent.fuln8-1.fna.fbcdn.net/v/t39.30808-6/278968686_1901202163407089_1361302335978599199_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=qRoq5YbmBHgAX9gRoIv&_nc_ht=scontent.fuln8-1.fna&oh=00_AfBYM9W3_tZGnZIatOrMfHf3HAGgvzyH-Tj_h2HEIREpdA&oe=63896FA8",
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
