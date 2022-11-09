import React from "react";
import { CustomButton } from "../components/CustomButton";
import { CustomBreadcrumbs } from "../components/nav_menu/CustomBreadCrumbs";

export const Exercice1 = () => {
  return (
    <>
      <CustomBreadcrumbs currentPage={"Exercice 1"} />
      <CustomButton
        text="Click-me !"
        action={() => alert("You just click me :o")}
      />
    </>
  );
};
