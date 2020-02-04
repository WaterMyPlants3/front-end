import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { ButtonStyling, AddPlantContainer, ButtonContainer } from "../styled/formStyled";
import { InputDiv, InputLabel, ErrorMessage } from '../styled/StyledComponents_LoginForm';


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
        <Form>
        <InputDiv>
          <InputLabel htmlFor="nickname">Plant Nickname</InputLabel>
          <input id="nickname"
              type="text"
              name="nickname"
              value={newPlant.nickname}
              onChange={handleChanges}
              ref={register}/>
            {errors.nickname && <ErrorMessage>{errors.nickname.message}</ErrorMessage>}
        </InputDiv>
            

        <InputDiv>
          <InputLabel htmlFor="species">Plant Species</InputLabel>
          <input id="species"
            type="text"
            name="species"
            value={newPlant.species}
            onChange={handleChanges}
            ref={register}/>
          {errors.species && <ErrorMessage>{errors.species.message}</ErrorMessage>}

        </InputDiv>

        <InputDiv>
        <InputLabel htmlFor="h2oFrequency">Watering Schedule</InputLabel>
          <input id="h2oFrequency"
              type="text"
              name="h2ofrequency"
              value={newPlant.h2oFrequency}
              onChange={handleChanges}
              ref={register}/>
          {errors.h2oFrequency && <ErrorMessage>{errors.h2oFrequency.message}</ErrorMessage>}
        </InputDiv>
            
        <ButtonContainer>
          <ButtonStyling>Add new plant</ButtonStyling>
        </ButtonContainer>
      </Form>
    </AddPlantContainer>
  );
};

export default AddPlantForm;
