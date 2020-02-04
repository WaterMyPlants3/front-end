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
    .required('Species is required')
});

const UpdatePlantForm = (props) => {
  const { register, handleSubmit, errors } = useForm({ validationSchema:ValidationSchema });
  const onSubmit = (data) => { 
    console.log(data)
   };

  const [plant, setPlant] = useState({
    name: '',
    nickname: '',
    species: '',
    h2oFrequency: ''
  });
  const plantID = useParams();
  console.log(plantID);

  useEffect(() => {
    axios.get(`http://localhost:3000/plants/${plantID}`)
        .then(response => {
          setPlant(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, [plantID]);

  useEffect(() => {
    setPlant({
      name: props.plant.name,
      nickname: props.plant.nickname,
      species: props.plant.species,
      h2oFrequency: props.plant.h2oFrequency
    })
  }, [props.editPlant])


  const handleChange = (event) => {
    setPlant({...plant, [event.target.name]: event.target.value});
  };

  if(!plant) {
    return (
      <div>Loading plant information...</div>
    )
  }

  return (
    <AddPlantContainer>
      <InputContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RowOneStyling
            id="name"
            type="text"
            name="name"
            placeholder="name"
            value={props.plant.name}
            onChange={handleChange}
            ref={register}
          />
          {errors.name ? (<span>{errors.name.message}</span>) : null}
          <RowOneStyling
            id="nickname"
            type="text"
            name="nickname"
            placeholder="nickname"
            value={props.plant.nickname}
            onChange={handleChange}
            ref={register}
          />
          {errors.nickname ? (<span>{errors.nickname.message}</span>) : null}
          <RowOneStyling
            id="species"
            type="text"
            name="species"
            placeholder="species"
            value={props.plant.species}
            onChange={handleChange}
            ref={register}
          />
          {errors.species ? (<span>{errors.species.message}</span>) : null}
          <RowOneStyling
            id="h2oFrequency"
            type="text"
            name="h2ofrequency"
            placeholder="h2oFrequency"
            value={props.plant.h2oFrequency}
            onChange={handleChange}
            ref={register}
          />

          <ButtonContainer>
            <ButtonStyling>Update Plant</ButtonStyling>
          </ButtonContainer>
        </form>
      </InputContainer>
    </AddPlantContainer>
  );
};
export default UpdatePlantForm;
