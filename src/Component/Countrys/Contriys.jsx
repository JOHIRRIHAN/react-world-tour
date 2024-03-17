import { useEffect } from "react";
import { useState } from "react";
import Contry from "./Contry/Contry";
import "./contriys.css";

const Contriys = () => {
  const [Contriys, setCountrys] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);
  return (
    <div >
      <h3>Contriys: {Contriys.length}</h3>
      <div className="country-container">
        {Contriys.map((contry) => (
          <Contry key={contry.cca3} contry={contry}></Contry>
        ))}
      </div>
    </div>
  );
};

export default Contriys;
