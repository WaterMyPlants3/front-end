import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import {
  ButtonStyling,
  AddPlantContainer,
  InputContainer,
  RowOneStyling,
  ButtonContainer
} from "../styled/formStyled";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(30, 'Name must be less than 30 characters long')
    .required('Name is required'),
  nickname: Yup.string()
    .min(3, 'Nickname must be at least 3 characters long')
    .max(30, 'Nickname must be less than 30 characters long')
    .required('Nickname is required'),
  species: Yup.string()
    .required('Species is required'),
  h2oFrequency: Yup.string()
    .min(1, 'Water frequency must be greater than zero')
    .required('Water frequency is required')
});

const UpdatePlantForm = (props) => {
  const { edit, handleSubmit, errors } = useForm({ validationSchema: ValidationSchema, mode: "onChange" });
  const onSubmit = (event) => { 
    event.preventDefault();
   };

  const [plant, setPlant] = useState();
  const plantID = useParams();

  useEffect(() => {
    axios
        .get(`http://localhost:3000/plants/${plantID}`)
        .then(response => {
          setPlant(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, [plantID])

  // if(!plant) {
  //   return (
  //     <div>Loading plant information...</div>
  //   )
  // }

  return (
    <AddPlantContainer>
      <InputContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RowOneStyling
            id="name"
            type="text"
            name="name"
            placeholder="name"
            value={plant.name}
            ref={edit}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <RowOneStyling
            id="nickname"
            type="text"
            name="nickname"
            placeholder="nickname"
            value={plant.nickname}
            ref={edit}
          />
          {errors.nickname && <span>{errors.nickname.message}</span>}
          <RowOneStyling
            id="species"
            type="text"
            name="species"
            placeholder="species"
            value={plant.species}
            ref={edit}
          />
          {errors.species && <span>{errors.species.message}</span>}
          <RowOneStyling
            id="h2oFrequency"
            type="text"
            name="h2ofrequency"
            placeholder="h2oFrequency"
            value={plant.h2oFrequency}
            ref={edit}
          />
          {errors.h2oFrequency && <span>{errors.h2oFrequency.message}</span>}

          <ButtonContainer>
            <ButtonStyling>Update Plant</ButtonStyling>
          </ButtonContainer>
        </form>
      </InputContainer>
    </AddPlantContainer>
  );
};
export default UpdatePlantForm;
