import React, { useState, useEffect } from "react";
import { FormControl, TextField } from "@mui/material";

export const InputComponent = ({
  name,
  value,
  setValue,
  disabled,
  validation,
  edit,
}) => {
  const [label, setLabel] = useState();
  useEffect(() => {
    switch (name) {
      case "PR":
        setLabel("Nama Projek");
        break;
      case "BD":
        setLabel("Nama Gedung");
        break;
      case "FL":
        setLabel("Nama Lantai");
        break;
      case "RO":
        setLabel("Nama Ruangan");
        break;
      default:
        setLabel(name);
        break;
    }
  }, [name]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl autoWidth sx={{ my: 1 }} disabled={!label}>
      <TextField
        label={
          !label
            ? `Silahkan Pilih Tipe Terlebih Dahulu`
            : edit
            ? label
            : `Masukan ${label}`
        }
        size="small"
        onChange={handleChange}
        value={value}
        disabled={disabled}
        error={!validation && value?.length > 0}
        helperText={!validation && value?.length > 0 && `Format ${label} Salah`}
      />
    </FormControl>
  );
};

export default InputComponent;
