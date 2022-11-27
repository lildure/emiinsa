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
      product: "Ципроцин 7мл",
      img: "https://euromed.mn/wp-content/uploads/2021/04/6496899016202665212883614001980077875778122306555043906.jpg",
      price: 15000,
      date: "1 March",
      stock: 78,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Dove Baby 200ml Rich Moisture",
      img: "https://euromed.mn/wp-content/uploads/2021/04/richmoisture-shampoo-fop-1083405.png",
      price: 7000,
      date: "1 March",
      stock: 90,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Виусид 30мл №1",
      img: "https://euromed.mn/wp-content/uploads/2022/01/2.gif",
      price: 9100,
      date: "1 March",
      stock: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Аами Таами үзэмтэй нэрстэй үрэл",
      img: "https://euromed.mn/wp-content/uploads/2021/04/%D0%90%D0%B0%D0%BC%D0%B8-%D0%A2%D0%B0%D0%B0%D0%BC%D0%B8-%D2%AF%D0%B7%D1%8D%D0%BC%D1%82%D1%8D%D0%B9-%D0%BD%D1%8D%D1%80%D1%81%D1%82%D1%8D%D0%B9-%D2%AF%D1%80%D1%8D%D0%BB.jpg",
      price: 2080,
      date: "1 March",
      stock: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "off шавжнаас хамгаалах шүршигч",
      img: "https://euromed.mn/wp-content/uploads/2022/06/extreme.gif",
      price: 11500,
      date: "1 March",
      stock: 20,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* Table нэр */}
        <TableHead className="tablefont">
          <TableRow>
            <TableCell className="tableCell">Зураг</TableCell> 
            <TableCell className="tableCell">SKU код</TableCell> 
            <TableCell className="tableCell">Нэр</TableCell>
            <TableCell className="tableCell">Үнэ</TableCell>
            <TableCell className="tableCell">Өдөр</TableCell>
            <TableCell className="tableCell">Үлдэгдэл</TableCell>
            <TableCell className="tableCell">Төлбөрийн нөхцөл</TableCell>
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
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.stock}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
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
