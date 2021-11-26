/* eslint-disable array-callback-return */
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import React from "react";

const SelectComponent = ({ listData, name, setValue, value, disabled, edit }) => {
  const handleChange = (event) => {
    setValue(JSON.parse(event.target.value));
  };
  return (
    <FormControl fullWidth sx={{ my: 1 }} disabled={disabled}>
      <InputLabel size="small">Pilih {name}</InputLabel>
      <Select
        size="small"
        value={edit ? `${JSON.stringify(value)}` : value}
        label={`Pilih ${name}`}
        onChange={handleChange}
        displayEmpty
      >
        {listData?.length > 0 ? (
          listData.map((item) => {
            switch (name) {
              case "Tipe Lokasi":
                return (
                  <MenuItem value={`${JSON.stringify(item)}`}>
                    {item.label}
                  </MenuItem>
                );
              case "Projek":
                delete item["locActiveLabel"];
                delete item["locTypeLabel"];
                return (
                  <MenuItem value={`${JSON.stringify(item)}`}>
                    {item.locName}
                  </MenuItem>
                );
              case "Gedung":
                delete item["locTypeLabel"];
                delete item["locActiveLabel"];
                return (
                  <MenuItem value={`${JSON.stringify(item)}`}>
                    {item.locName}
                  </MenuItem>
                );
              case "Lantai":
                delete item["locTypeLabel"];
                delete item["locActiveLabel"];
                return (
                  <MenuItem value={`${JSON.stringify(item)}`}>
                    {item.locName}
                  </MenuItem>
                );
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
