/* eslint-disable react-hooks/exhaustive-deps */
import { Stack, Button, Paper, Alert, AlertTitle, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  requestTypeLocation,
  requestProject,
  requestBuilding,
  requestFloor,
  clearProject,
  clearBuilding,
  clearFloor,
} from "../../redux/action";
import {
  clearPostData,
  requestTambahData,
} from "../../redux/action/postDataAction";
import InputComponent from "../InputComponent";
import SelectComponent from "../SelectComponent";

const MenuComponent = () => {
  // STATE
  const [tipe, setTipe] = useState();
  const [projek, setProjek] = useState();
  const [gedung, setGedung] = useState();
  const [lantai, setLantai] = useState();
  const [nama, setNama] = useState();
  const [latitude, setLatitude] = useState();
  const [latValidate, setLatValidate] = useState(false);
  const [longitude, setLongitude] = useState();
  const [longValidate, setLongValidate] = useState(false);
  const [dispensasi, setDispensasi] = useState();
  const [data, setData] = useState();
  const [modalResponse, setModalResponse] = useState(false);
  // USESELECTOR
  const { typeLocation } = useSelector((state) => state.typeLocationReducer);
  const { project } = useSelector((state) => state.projectReducer);
  const { building } = useSelector((state) => state.buildingReducer);
  const { floor } = useSelector((state) => state.floorReducer);
  const { messagePost, dataPost, initialPost } = useSelector(
    (state) => state.postDataReducer
  );

  // REGEX
  const testLatitude = new RegExp(
    "^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$"
  );
  const testLongitude = new RegExp(
    "^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$"
  );

  // USEDISPATCH
  const dispatch = useDispatch();

  // HANDLER
  const handleTipe = (data) => {
    setTipe(data);
    dispatch(clearProject());
    setProjek();
    dispatch(clearBuilding());
    setGedung();
    dispatch(clearFloor());
    setLantai();
  };
  const handlerProjek = (data) => {
    setProjek(data);
    dispatch(clearBuilding());
    setGedung();
    dispatch(clearFloor());
    setLantai();
  };
  const handlerGedung = (data) => {
    setGedung(data);
    dispatch(clearFloor());
    setLantai();
  };
  const handlerLantai = (data) => {
    setLantai(data);
  };
  const handlerLatitude = (data) => {
    setLatValidate(testLatitude.test(data));
    setLatitude(data);
  };
  const handlerLongitude = (data) => {
    setLongValidate(testLongitude.test(data));
    setLongitude(data);
  };
  const handlerDispensasi = (data) => {
    setDispensasi(data.replace(/[^0-9]/g, ""));
  };
  const handlerTambahData = () => {
    dispatch(requestTambahData(data));
  };
  const handleModalClose = () => {
    setModalResponse(false);
    dispatch(clearPostData());
  };

  // LIFECYCLE
  useEffect(() => {
    dispatch(requestTypeLocation());
  }, []);
  useEffect(() => {
    dispatch(requestProject());
  }, [tipe]);
  useEffect(() => {
    dispatch(requestBuilding(projek?.locCode));
  }, [projek]);
  useEffect(() => {
    dispatch(requestFloor(gedung?.locCode));
  }, [gedung]);
  useEffect(() => {
    switch (tipe?.value) {
      case "PR":
        if (nama && longitude && latitude && dispensasi) {
          setData({
            locName: nama,
            locType: "PR",
            locLatitude: longitude,
            locLongitude: latitude,
            locDispensation: dispensasi,
          });
        } else {
          setData();
        }
        break;
      case "BD":
        if (projek && nama && longitude && latitude && dispensasi) {
          setData({
            locName: nama,
            locType: "BD",
            projectCode: projek.locCode,
            locLatitude: longitude,
            locLongitude: latitude,
            locDispensation: dispensasi,
          });
        } else {
          setData();
        }
        break;
      case "FL":
        if (projek && gedung && nama && longitude && latitude && dispensasi) {
          setData({
            locName: nama,
            locType: "FL",
            projectCode: projek?.locCode,
            buildingCode: gedung?.locCode,
            locLatitude: longitude,
            locLongitude: latitude,
            locDispensation: dispensasi,
          });
        } else {
          setData();
        }
        break;
      case "RO":
        if (
          projek &&
          gedung &&
          lantai &&
          nama &&
          longitude &&
          latitude &&
          dispensasi
        ) {
          setData({
            locName: nama,
            locType: "RO",
            projectCode: projek?.locCode,
            buildingCode: gedung?.locCode,
            floorCode: lantai?.locCode,
            locLatitude: longitude,
            locLongitude: latitude,
            locDispensation: dispensasi,
          });
        } else {
          setData();
        }
        break;
      default:
        break;
    }
  }, [tipe, projek, gedung, lantai, nama, longitude, latitude, dispensasi]);
  useEffect(() => {
    if (!initialPost) {
      setTimeout(() => {
        setModalResponse(true);
      }, 1000);
    }
  }, [initialPost]);
  return (
    <Paper
      component="span"
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "column",
        marginHorizontal: "2%",
      }}
    >
      <SelectComponent
        listData={typeLocation}
        name="Tipe Lokasi"
        setValue={(data) => handleTipe(data)}
        value={tipe}
      />
      {tipe?.value !== "PR" && (
        <SelectComponent
          listData={project}
          name="Projek"
          setValue={(data) => handlerProjek(data)}
          value={projek}
          disabled={!tipe}
        />
      )}
      {tipe?.value !== "PR" && tipe?.value !== "BD" && (
        <SelectComponent
          listData={building}
          name="Gedung"
          setValue={(data) => handlerGedung(data)}
          value={gedung}
          disabled={!projek}
        />
      )}
      {tipe?.value !== "PR" && tipe?.value !== "BD" && tipe?.value !== "FL" && (
        <SelectComponent
          listData={floor}
          name="Lantai"
          setValue={(data) => handlerLantai(data)}
          value={lantai}
          disabled={!gedung}
        />
      )}
      <InputComponent
        value={nama}
        name={tipe?.value}
        setValue={(value) => setNama(value)}
        disabled={!tipe}
        validation={true}
      />
      <InputComponent
        value={latitude}
        name="Latitude"
        setValue={(value) => handlerLatitude(value)}
        disabled={!tipe}
        validation={latValidate}
      />
      <InputComponent
        value={longitude}
        name="Longitude"
        setValue={(value) => handlerLongitude(value)}
        disabled={!tipe}
        validation={longValidate}
      />
      <InputComponent
        value={dispensasi}
        name="Dispensasi (Dalam Meter)"
        setValue={(value) => handlerDispensasi(value)}
        disabled={!tipe}
        validation={true}
      />
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handlerTambahData}
          disabled={!data}
          variant="contained"
        >
          Simpan
        </Button>
        <Button variant="outlined">Batal</Button>
      </Stack>
      <Modal open={modalResponse} onClose={handleModalClose}>
        {dataPost ? (
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            {messagePost}
          </Alert>
        ) : (
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {messagePost}
          </Alert>
        )}
      </Modal>
    </Paper>
  );
};

export default MenuComponent;