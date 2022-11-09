import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export const CustomBreadcrumbs = (props) => {
  const { currentPage } = props;
  return (
    <>
      <div style={{ marginLeft: "300px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Accueil
          </Link>
          <Typography color="text.primary">{currentPage}</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
};
