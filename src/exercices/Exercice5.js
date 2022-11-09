import React from "react";
import { NewPeople } from "../components/NewPeople";
import { CustomBreadcrumbs } from "../components/nav_menu/CustomBreadCrumbs";

export const Exercice5 = () => {
  return (
    <>
      <CustomBreadcrumbs currentPage={"Exercice 5"} />
      <NewPeople variant="outlined" />
    </>
  );
};
