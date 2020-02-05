import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  InputDiv,
  InputLabel,
  ErrorMessage,
  LoginButton,
  LoginBox
} from "../styled/StyledComponents_LoginForm";

// const ValidationSchema = Yup.object().shape({
//   nickname: Yup.string().required("Plant needs an identity"),
//   h2oFrequency: Yup.select().required("Need a schedule")
// });

const AddPlantForm = props => {
  // const setPlant = props.addPlant;

  const [plant, setPlant] = useState({
    nickname: "",
    species: "",
    h2oFrequency: "",
    id: Date.now()
  });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = event => {
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  return (
    <LoginBox>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputDiv>
          <InputLabel htmlFor="nickname">Plant Nickname</InputLabel>
          <input
            id="nickname"
            type="text"
            name="nickname"
            value={plant.nickname}
            ref={register}
          />
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="species">Plant Species</InputLabel>
          <input
            id="species"
            type="text"
            name="species"
            value={plant.species}
            ref={register}
          />
          {errors.species && (
            <ErrorMessage>{errors.species.message}</ErrorMessage>
          )}
        </InputDiv>

        <InputDiv>
          <InputLabel htmlFor="h2oFrequency">Water every:</InputLabel>
          <select
            id="h2oFrequency"
            type="select"
            name="h2ofrequency"
            value={plant.h2oFrequency}
            ref={register}
          >
            <option value="1">Twice a day</option>
            <option value="2">Once a Day</option>
            <option value="4">Every Two Days</option>
            <option value="14">Once a Week</option>
          </select>
          {errors.h2oFrequency && (
            <ErrorMessage>{errors.h2oFrequency.message}</ErrorMessage>
          )}
        </InputDiv>

        <LoginButton>Add new plant</LoginButton>
      </form>
    </LoginBox>
  );
};

export default AddPlantForm;
