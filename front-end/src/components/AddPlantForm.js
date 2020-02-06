import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as Yup from "yup";
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
    console.log("this event", event);

    axiosWithAuth()
      .post(`/api/users/plants`, event)
      .then(res => {
        console.log("this is the data after then", res);
        setPlant(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <InputDiv>
        <InputLabel htmlFor="nickname">Plant Nickname</InputLabel>
        <input id="nickname" type="text" name="nickname" ref={register} />
      </InputDiv> */}

      <InputDiv>
        <InputLabel htmlFor="species">Plant Species</InputLabel>
        <input id="species" type="text" name="species" ref={register} />
        {errors.species && (
          <ErrorMessage>{errors.species.message}</ErrorMessage>
        )}
      </InputDiv>

      {/* <InputDiv>
        <InputLabel htmlFor="h2oFrequency">Water every:</InputLabel>
        <select
          id="h2oFrequency"
          type="select"
          name="h2ofrequency"
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
      </InputDiv> */}

      <LoginButton>Add new plant</LoginButton>
    </form>
    // </LoginBox>
  );
};

export default AddPlantForm;
