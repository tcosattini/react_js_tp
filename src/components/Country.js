import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Country = () => {
  const [topLevelDomain, setTopLevelDomain] = useState("");
  const [capital, setCapital] = useState("");
  const [response, setResponse] = useState([]);
  const [population, setPopulation] = useState();
  const [error, setError] = useState();
  let { country } = useParams();
  console.log(country);
  useEffect(() => {
    // setCapital(response.data[0].capital);
  }, [response]);
  useEffect(() => {
    axios({
      method: "get",
      baseURL: `https://restcountries.com`,
      url: `/v3.1/name/${country}`,
    })
      .then((response) => {
        setResponse(response.data[0]);
        setCapital(response.data[0].capital[0]);
        setPopulation(response.data[0].population);
        setTopLevelDomain(response.data[0].tld);
      })
      .catch((error) => {
        setError(error);
      });
  }, [country]);

  return (
    <div>
      <h1>{country}</h1>
      Domaine web : <b>{topLevelDomain}</b>
      <br />
      Capitale : <b>{capital}</b>
      <br />
      Population : <b>{population}</b>
      <br />
      {error && (
        <div style={{ color: "red" }}>
          Erreur, ce pays n'a pas été trouvé !{" "}
        </div>
      )}
    </div>
  );
};
export default Country;
