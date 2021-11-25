/* eslint-disable array-callback-return */
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import React from "react";

const SelectComponent = ({ listData, name, setValue, value, disabled }) => {
  const handleChange = (event) => {
    switch (name) {
      case "Tipe Lokasi":
        setValue(event.target.value);
        break;
      case "Projek":
        setValue(event.target.value);
        break;
      case "Gedung":
        setValue(event.target.value);
        break;
      case "Lantai":
        setValue(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <FormControl fullWidth sx={{ my: 1 }} disabled={disabled}>
      <InputLabel size="small">Pilih {name}</InputLabel>
      <Select
        size="small"
        value={value?.label}
        label={`Pilih ${name}`}
        onChange={handleChange}
      >
        {listData?.length > 0 ? (
          listData.map((item) => {
            switch (name) {
              case "Tipe Lokasi":
                return <MenuItem value={item}>{item.label}</MenuItem>;
              case "Projek":
                return <MenuItem value={item}>{item.locName}</MenuItem>;
              case "Gedung":
                return <MenuItem value={item}>{item.locName}</MenuItem>;
              case "Lantai":
                return <MenuItem value={item}>{item.locName}</MenuItem>;
              default:
                break;
            }
          })
        ) : (
          <MenuItem value="">Tidak Ada Data</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
