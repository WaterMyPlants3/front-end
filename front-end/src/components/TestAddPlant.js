import React, { useState } from "react";

import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {
  InputDiv,
  LoginBox,
  AppTitle
} from "../styled/StyledComponents_LoginForm";
import {
  ButtonContainer,
  ButtonStyling,
  RowOneStyling
} from "../styled/formStyled";

const InputContainer = styled.div`
  // border: 2px solid grey;
`;

const TestAddPlant = props => {
  const [plant, setPlant] = useState({
    id: Date.now(),
    species: "",
    nickName: "",
    h2oFrequency: ""
  });

  const addPlant = async event => {
    event.preventDefault();
    try {
      const fetchData = await axiosWithAuth().post(`/api/plants`, {
        id: plant.id,
        species: plant.species
      });

      console.log("this is the data after then", fetchData);
      // const updatedPlants = [...props.plants, plant];
      // props.setPlants(updatedPlants);
      // console.log("updated", updatedPlants);
      const localStorageToken = JSON.parse(localStorage.getItem("token"));
      const updateData = await axiosWithAuth().post(
        `/api/users/${localStorageToken.id}/plants`,
        plant
      );

      console.log("this is the data after then", updateData);
      const updatedPlants = [...props.plants, plant];
      props.setPlants(updatedPlants);
      console.log("updated", updatedPlants);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChanges = event => {
    event.preventDefault();
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  return (
    <LoginBox>
      <InputContainer>
        <form onSubmit={event => addPlant(event)}>
          <AppTitle>New Plant</AppTitle>
          <InputDiv>
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
          </InputDiv>
          <InputDiv>
            <RowOneStyling
              id="nickName"
              type="text"
              name="nickName"
              placeholder="nickName"
              value={plant.nickName}
              onChange={handleChanges}
              autoComplete="off"
              border="none"
            />
          </InputDiv>
          <InputDiv>
            <RowOneStyling
              id="h2oFrequency"
              type="text"
              name="h2oFrequency"
              placeholder="Times
            a week?"
              value={plant.h2oFrequency}
              onChange={handleChanges}
              autoComplete="off"
              border="none"
            />
          </InputDiv>

          <ButtonContainer>
            <ButtonStyling type="submit">Add Plant</ButtonStyling>
          </ButtonContainer>
        </form>
      </InputContainer>
    </LoginBox>
  );
};

export default TestAddPlant;
