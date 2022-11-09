import React from "react";
import { CustomBreadcrumbs } from "../components/nav_menu/CustomBreadCrumbs";
import { CustomButtonAlt } from "../components/CustomButtonAlt";

export const Exercice4 = (props) => {
  const { refs, breadCrumbs } = props;
  return (
    <>
      {breadCrumbs && <CustomBreadcrumbs currentPage={"Exercice 4"} />}
      <CustomButtonAlt ref={refs.ref1} text="Button 1" id="button1" />
      <CustomButtonAlt ref={refs.ref2} text="Button 2" id="button2" />
      <CustomButtonAlt ref={refs.ref3} text="Button 3" id="button3" />
    </>
  );
};
