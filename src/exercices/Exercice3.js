import React from "react";
import { CustomBreadcrumbs } from "../components/nav_menu/CustomBreadCrumbs";
import Button from "@mui/material/Button";

export const Exercice3 = () => {
  return (
    <>
      <CustomBreadcrumbs currentPage={"Exercice 3"} />
      <Button
        variant="contained"
        onClick={() => console.log("Click on Mui button !")}
      >
        Mui button
      </Button>
    </>
  );
};
