import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  ButtonContainer,
  ButtonStyling,
  AddPlantContainer,
  RowOneStyling
} from "../styled/formStyled";

const InputContainer = styled.div`
  // border: 2px solid grey;
`;

const TestAddPlant = props => {
  const [plant, setPlant] = useState({
    id: Date.now(),
    species: ""
  });

  const addPlant = event => {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/plants`, plant)
      .then(res => {
        console.log("this is the data after then", res);
        const updatedPlants = [...props.plant, plant];
        props.setPlants(updatedPlants);
        console.log("updated", updatedPlants);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleChanges = event => {
    event.preventDefault();
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  return (
    <AddPlantContainer>
      <InputContainer>
        <form onSubmit={event => addPlant(event)}>
          <RowOneStyling
            id="species"
            type="text"
            name="species"
            placeholder="Species"
            value={plant.name}
            onChange={handleChanges}
            autoComplete="off"
            border="none"
          />
          {/* <RowOneStyling
            id="species"
            type="text"
            name="nickname"
            placeholder="nickname"
            value={plant.nickname}
            onChange={handleChanges}
            autoComplete="off"
            border="none"
          /> */}

          <ButtonContainer>
            <ButtonStyling type="submit">Add Plant</ButtonStyling>
          </ButtonContainer>
        </form>
      </InputContainer>
    </AddPlantContainer>
  );
};

export default TestAddPlant;
