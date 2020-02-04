import React, { useState } from "react";
import styled from "styled-components";
import AddPlantForm from "./AddPlantForm";
import PlantCard from "./PlantCard";
import SearchBar from "./SearchBar";

const ListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: rows;
  background: #3aafa9;
  border-radius: 10px;
  padding: 5%;
  margin: 3%;
`;

const PlantList = (props) => {
  const [input, setInput] = useState("");

  // Add use Effect with axiosWithAuth here:

  const handleInputChange = event => {
    event.preventDefault();
    setInput(event.target.value);
  };

  return (
    <section className="plants-list">
      <SearchBar handleInputChange={handleInputChange} />
      <ListStyle>
        <PlantCard key={props.plant.id} plantToEdit={props.plantToEdit} plant={props.plant} />
      </ListStyle>
      <AddPlantForm addNewPlant={props.addNewPlant} />
    </section>
  );
};
export default PlantList;
