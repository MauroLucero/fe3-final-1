import React from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { response } from "msw";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users/";

  const [doctores, setDoctores] = useState([{}]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setDoctores(response.data);
    });
  }, []);

  console.log(doctores);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {doctores.map(function (doctor) {
          return <Card name={doctor.name} username={doctor.username} />;
        })}
      </div>
    </main>
  );
};

export default Home;
