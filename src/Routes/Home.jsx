import Card from "../Components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
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
    <main className=''>
      <h1>Home</h1>
      <div className="card-grid">
        {doctores.map((doctor) =>    
                <Card name={doctor.name} username={doctor.username} id={doctor.id} key={doctor.id}/>
        )}
      </div>
    </main>
  );
};

export default Home;
