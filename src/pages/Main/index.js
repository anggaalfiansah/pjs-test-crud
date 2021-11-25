import { Paper } from "@mui/material";
import React from "react";
import FormComponent from "../../components/FormComponent";
import TableComponent from "../../components/TableComponent";

const MainPage = () => {
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
      <FormComponent />
      <TableComponent />
    </Paper>
  );
};

export default MainPage;
