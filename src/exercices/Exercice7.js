import React from "react";
import { CustomBreadcrumbs } from "../components/nav_menu/CustomBreadCrumbs";
import { ResetButton } from "../components/ResetButton";
import { Exercice4 } from "./Exercice4";

export const Exercice7 = (props) => {
  const { refs } = props;
  console.log(refs);
  return (
    <>
      <CustomBreadcrumbs currentPage={"Exercice 7"} />
      <Exercice4 refs={refs} breadcrumb={false} />
      <ResetButton refs={refs} />
    </>
  );
};
