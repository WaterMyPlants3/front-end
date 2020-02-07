import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import {
  InputDiv,
  InputLabel,
  ErrorMessage,
  LoginButton,
  LoginBox
} from "../styled/StyledComponents_LoginForm";

const AddPlantForm = props => {
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
      <InputDiv>
        <InputLabel htmlFor="species">Plant Species</InputLabel>
        <input id="species" type="text" name="species" ref={register} />
        {errors.species && (
          <ErrorMessage>{errors.species.message}</ErrorMessage>
        )}
      </InputDiv>

      <LoginButton>Add new plant</LoginButton>
    </form>
  );
};

export default AddPlantForm;
