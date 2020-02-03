import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ButtonStyling } from "./styled/formStyled";

const AddPlantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  background-color: #bbbbbb;
`;
const InputContainer = styled.div`
  //   border: 2px solid grey;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
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

const UpdatePlantForm = () => {
  return (
    <AddPlantContainer>
      <InputContainer>
        <form>
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
        </form>
      </InputContainer>
    </AddPlantContainer>
  );
};
export default UpdatePlantForm;
