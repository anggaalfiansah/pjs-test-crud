/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { requestLocation } from "../../redux/action";

const TableComponent = () => {
  const { initialPost } = useSelector((state) => state.postDataReducer);
  // STATE
  const [data, setData] = useState([]);
  // USESELECTOR
  const { location } = useSelector((state) => state.locationReducer);

  // DISPATCH
  const dispatch = useDispatch();

  // FILTER DATA
  const processingData = async () => {
    const newData = [];
    await Promise.all(
      location.map((item) => {
        switch (item.locType) {
          case "PR":
            newData.push({ ...item, label: "Projek" });
            break;
          case "BD":
            newData.push({ ...item, label: "Gedung" });
            break;
          case "FL":
            newData.push({ ...item, label: "Lantai" });
            break;
          case "RO":
            newData.push({ ...item, label: "Ruangan" });
            break;
          default:
            break;
        }
      })
    );
    setData(newData);
  };

  //   LIFECYCLE
  useEffect(() => {
    dispatch(requestLocation());
  }, [initialPost]);
  useEffect(() => {
    processingData();
  }, [location]);
  return (
    <TableContainer component={Paper} sx={{ my: 5 }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nama</TableCell>
            <TableCell align="right">Kode Lokasi</TableCell>
            <TableCell align="right">Tipe Lokasi</TableCell>
            <TableCell align="center">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.locName}
              </TableCell>
              <TableCell align="right">{row.locCode}</TableCell>
              <TableCell align="right">{row.label}</TableCell>
              <TableCell
                align="center"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button variant="outlined">Edit</Button>
                <Button variant="outlined" color="error">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableComponent;
