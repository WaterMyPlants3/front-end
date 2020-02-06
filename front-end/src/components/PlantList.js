import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddPlantForm from "./AddPlantForm";
import PlantCard from "./PlantCard";
import SearchBar from "./SearchBar";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import TestAddForm from "./TestAddPlant";

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: rows;
  background: #89cc7c;
  border-radius: 10px;
  padding: 5%;
  margin: 3%;
`;

const PlantList = props => {
  const [input, setInput] = useState("");
  const [plants, setPlants] = useState([]);
  const [usersPlant, setUsersPlant] = useState([]);
  //   const userId = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/2/plants`)
      .then(response => {
        console.log(response.data);
        setUsersPlant([...response.data]);
        const searchPlant = response.data.filter(plnt =>
          plnt.species.toLowerCase().includes(input.toLocaleLowerCase())
        );
        setPlants(searchPlant);
      })
      .catch(err => console.log("what went wrong?", err));
  }, [input]);

  const handleInputChange = event => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <section className="plants-list">
      <SearchBar handleInputChange={handleInputChange} />
      <h1>My Plants</h1>
      <ListStyle>
        {usersPlant.map((plnt, index) => {
          return (
            <PlantCard
              key={index}
              plantToEdit={props.plantToEdit}
              // name={plnt.name}
              id={plnt.id} //string
              species={plnt.species} //string
              plants={plants} // array
              plant={plnt} // plant object
              setPlants={setPlants}
              usersPlant={plnt.users_plants}
              setUsersPlant={setUsersPlant}
            />
          );
        })}
      </ListStyle>
      <TestAddForm plants={plants} setPlants={setPlants} />
    </section>
  );
};
export default PlantList;
