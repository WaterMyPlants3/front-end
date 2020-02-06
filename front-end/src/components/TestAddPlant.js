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

// const RowOneStyling = styled.input`
//   width: 28%;
//   height: 2rem;
//   border-radius: 10px;
//   font-size: 1.6rem;
//   font-family: "Lucida Casual", "Comic Sans MS";
//   padding: 1.5%;
//   border: 1px solid white;
//   margin-top: 3%;
//   outline: none;

//   &:focus {
//     outline: none;
//   }
// `;

const TestAddPlant = () => {
  const [plant, setPlant] = useState({
    // nickname: "",
    species: "",
    //    h2oFrequency: "",
    id: Date.now()
  });

  const addPlant = event => {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/plants`, plant)
      .then(res => {
        console.log("this is the data after then", res);
        window.location.reload();
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
            placeholder="name"
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
