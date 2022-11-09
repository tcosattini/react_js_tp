import React, { useState } from "react";
import { TextField } from "@mui/material";

export function NewPeople(props) {
  const { variant } = props;

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  return (
    <>
      <TextField
        onChange={(e) => setNom(e.target.value)}
        label="Nom"
        variant={variant}
      />
      <TextField
        label="Prénom"
        variant={variant}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <p>
        {prenom}
        {nom}
      </p>
    </>
  );
}
