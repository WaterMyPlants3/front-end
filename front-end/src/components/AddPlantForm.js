import React, { useState } from "react";

import {
  ButtonStyling,
  AddPlantContainer,
  InputContainer,
  RowOneStyling,
  ButtonContainer
} from "../styled/formStyled";

const AddPlantForm = props => {
  const addNewPlant = props.addNewPlant;

  const [newPlant, setNewPlant] = useState({
    name: "",
    nickname: "",
    species: "",
    h2oFrequency: "",
    id: Date.now()
  });
  const handleChanges = event => {
    setNewPlant({ ...newPlant, [event.target.name]: event.target.value });
  };
  //   const submitForm = event => {
  //     event.preventDefault();
  //     addNewPlant(plant);
  //     setNewPlant({ name: "", nickname: "", species: "", h2ofrequency: "" });
  //   };
  return (
    <AddPlantContainer>
      <InputContainer>
        <form>
          {/* <PlantStyling> */}
          <RowOneStyling
            id="name"
            type="text"
            name="name"
            placeholder="name"
            value={newPlant.name}
            onChange={handleChanges}
          />
          <RowOneStyling
            id="nickname"
            type="text"
            name="nickname"
            placeholder="nickname"
            value={newPlant.nickname}
            onChange={handleChanges}
          />
          <RowOneStyling
            id="species"
            type="text"
            name="species"
            placeholder="species"
            value={newPlant.species}
            onChange={handleChanges}
          />
          <RowOneStyling
            id="h2oFrequency"
            type="text"
            name="h2ofrequency"
            placeholder="h2oFrequency"
            value={newPlant.h2oFrequency}
            onChange={handleChanges}
          />

          <ButtonContainer>
            <ButtonStyling>Add new plant</ButtonStyling>
          </ButtonContainer>
          {/* </PlantStyling> */}
        </form>
      </InputContainer>
    </AddPlantContainer>
  );
};
export default AddPlantForm;
