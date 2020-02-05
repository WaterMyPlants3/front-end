import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddPlantForm from "./AddPlantForm";
import PlantCard from "./PlantCard";
import SearchBar from "./SearchBar";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: rows;
  background: #89CC7C;
  border-radius: 10px;
  padding: 5%;
  margin: 3%;
`;

const PlantList = props => {
  const [input, setInput] = useState("");
  const [plants, setPlants] = useState([]);

  // Add use Effect with axiosWithAuth here to filter data:

  useEffect(() => {
    axiosWithAuth()
      .get("/api/plants")
      .then(response => {
        console.log(response.data);
        const searchPlant = response.data.filter(plnt =>
          plnt.species.toLowerCase().includes(input.toLocaleLowerCase())
        );
        setPlants(searchPlant);
      })
      .catch(err => console.log("what went wrong?", err));
  }, []);

  const handleInputChange = event => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <section className="plants-list">
      <SearchBar handleInputChange={handleInputChange} />
      <ListStyle>
        {plants.map((plnt, index) => {
          return (
            <PlantCard
              key={index}
              plantToEdit={props.plantToEdit}
              // name={plnt.name}
              id={plnt.id} //string
              species={plnt.species} //string
              plants={plants} // array
              plant={plnt}
              setPlants={setPlants}
            />
          );
        })}
      </ListStyle>
      <AddPlantForm />
    </section>
  );
};
export default PlantList;
