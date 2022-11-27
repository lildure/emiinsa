import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://euromed.mn/wp-content/uploads/2021/04/6496899016202665212883614001980077875778122306555043906.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* Table нэр */}
        <TableHead>
          <TableRow>
            <TableCell className="tableimg">Зураг</TableCell> 
            <TableCell className="tableproduct">Бүтээгдэхүүн</TableCell> 
            <TableCell className="tableid">Ажилчдийн ID</TableCell>
            <TableCell className="tablecustomer">Үнэ</TableCell>
            <TableCell className="tabledate">Өдөр</TableCell>
            <TableCell className="tablestock">Тоо</TableCell>
            <TableCell className="tablemethod">Төлбөрийн нөхцөл</TableCell>
            <TableCell className="tableCell">Статус</TableCell>
          </TableRow>
        </TableHead>
        {/* Table ар нэр*/}
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableimg">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                </div>
              </TableCell>
              <TableCell className="tableid">{row.id}</TableCell>
              <TableCell className="tableproduct">{row.product}</TableCell>
              <TableCell className="tablecustomer">{row.customer}</TableCell>
              <TableCell className="tabledate">{row.date}</TableCell>
              <TableCell className="tablestock">{row.stock}</TableCell>
              <TableCell className="tablemethod">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
