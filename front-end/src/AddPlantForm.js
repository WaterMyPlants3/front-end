import React, { useState } from "react";
import styled from "styled-components";

const AddPlantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: auto;
  border-radius: 10px;
  background-color: #bbbbbb;
`;
const InputContainer = styled.div`
  padding: 2.5%;
  border: 2px solid white;
  outline: none;
  

    &:focus {
      outline: none;
`;

const RowOneStyling = styled.input`
  width: 28%;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-family: "Lucida Casual", "Comic Sans MS";
  padding: 1.5%;
  border: 1px solid white;
  margin-top: 3%;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
export const ButtonStyling = styled.button`
  text-align: center;
  background-color: #22283a;
  color: white;
  padding: 8px 0px;
  margin: 3%;
  border-radius: 5px;
  font-size: 1.9rem;
  font-family: "Lucida Casual", "Comic Sans MS";
  width: 200px;
  border: 2px solid #22283a;
  outline: none;

  &:hover {
    background-color: white;
    color: #22283a;
    animation: shadow-pulse 1s infinite;

    @keyframes shadow-pulse {
      0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
      }
      100% {
        box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
      }
    }
  }
`;

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
