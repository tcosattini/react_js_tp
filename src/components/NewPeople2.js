import React, { useState } from "react";

export function NewPeople2() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  return (
    <>
      <label>Nom</label>
      <input id={1} onChange={(e) => setNom(e.target.value)} />
      <label>Prénom</label>
      <input id={2} onChange={(e) => setPrenom(e.target.value)} />
      <p>
        {prenom}
        {nom}
      </p>
    </>
  );
}
