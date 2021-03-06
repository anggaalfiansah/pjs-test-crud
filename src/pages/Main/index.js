/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Paper,
  Modal,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Backdrop,
  CircularProgress,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FormComponent from "../../components/FormComponent";
import { useDispatch, useSelector } from "react-redux";
import { requestLocation, requestDetailLocation } from "../../redux/action";
import { Delete, Edit } from "@mui/icons-material";

const MainPage = () => {
  // STATE
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState();
  const [modalForms, setModalForms] = useState(false);
  // USESELECTOR
  const { location, loadingLocation } = useSelector(
    (state) => state.locationReducer
  );
  const { detailLocation } = useSelector(
    (state) => state.detailLocationReducer
  );
  const { initialPost } = useSelector((state) => state.postDataReducer);

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

  // HANDLER
  const handlerEdit = (item) => {
    dispatch(requestDetailLocation(item.locID));
  };
  const handlerDelete = (item) => {
    alert("API belum tersedia");
  };

  //   LIFECYCLE
  useEffect(() => {
    dispatch(requestLocation());
  }, [initialPost]);
  useEffect(() => {
    processingData();
  }, [location]);
  useEffect(() => {
    if (detailLocation) {
      setModalForms(true);
      setDataEdit(detailLocation);
    }
  }, [detailLocation]);
  return (
    <Paper
      component="span"
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
      }}
    >
      {/* section button tambah produk */}
      <Button onClick={() => setModalForms(true)} variant="outlined">
        Tambah
      </Button>

      {/* section tabel data */}
      <TableContainer component={Paper} sx={{ my: 5 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell align="right">Tipe Lokasi</TableCell>
              <TableCell align="right">Kode Lokasi</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
              <TableCell align="center">Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.locName}
                </TableCell>
                <TableCell align="right">{item.label}</TableCell>
                <TableCell align="right">{item.locCode}</TableCell>
                <TableCell align="right">
                  {item.locLatitude?.toFixed(5)}
                </TableCell>
                <TableCell align="right">
                  {item.locLongitude?.toFixed(5)}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <IconButton
                  color="primary"
                    component="span"
                    onClick={() => handlerEdit(item)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    sx={{ color: "red" }}
                    component="span"
                    onClick={handlerDelete}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* section form */}
      <Modal open={modalForms}>
        <FormComponent
          setModal={(boolean) => setModalForms(boolean)}
          setEdit={() => setDataEdit()}
          edit={dataEdit}
        />
      </Modal>

      {/* section loading */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingLocation}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
};

export default MainPage;
