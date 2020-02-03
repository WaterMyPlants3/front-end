import React, { useState, useEffect } from "react";

import {
  ButtonStyling,
  AddPlantContainer,
  InputContainer,
  RowOneStyling,
  ButtonContainer
} from "../styled/formStyled";

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
