import React, { useState } from "react";
import * as Yup from 'yup';

/////////////////////////////////////Validation Using Yup/////////////////////////////////////
const ValidationSchema = Yup.object().shape({
  nickname: Yup.string().required('Plant needs an identity'),
  h2oFrequency: Yup.select().required('Need a schedule')
});

///////////////////////////////////////Create Form for Adding Plants//////////////////////////
export default function AddPlantForm() {

  ////////////////////////////////////Define state as plant object////////////////////////////////
  const [plant, setPlants] = useState({
    nickname: "",
    species: "",
    h2oFrequency: '',
    id: Date.now()
  });

  //////////////////////////////////////////Function for making new plant////////////////////////////
const addNewPlant = plant => {
  const newPlant = {
    nickname: plant.name,
    species: plant.species,
    h2oFrequency: plant.h2ofrequency,
    id: plant.id
  }
}

/////////////////////////////////////////Change state using new plant//////////////////////////////////
setPlants([...plants, newPlant]);


///////////////////////////////////////////Form to add plant/////////////////////////////////////////////
  return (
    <Form addNewPlant = {addNewPlant}> {/*Input (x3) to fill values*/}
        <InputDiv>
          <InputLabel htmlFor="nickname">Plant Nickname</InputLabel>
          <input id="nickname"
              type="text"
              name="nickname"
              value={plant.nickname}
              ref={register}/>
        </InputDiv>
            

        <InputDiv>
          <InputLabel htmlFor="species">Plant Species</InputLabel>
          <input id="species"
            type="text"
            name="species"
            value={plant.species}
            ref={register}/>
          {errors.species && <ErrorMessage>{errors.species.message}</ErrorMessage>}
        </InputDiv>

        <InputDiv>
        <InputLabel htmlFor="h2oFrequency">Water every:</InputLabel>
          <select id="h2oFrequency"
            type="select"
            name="h2ofrequency"
            value={plant.h2oFrequency}
            ref={register}>
              <option value="1">Twice a day</option>
              <option value="2">Once a Day</option>
              <option value="4">Every Two Days</option>
              <option value="14">Once a Week</option>
          </select>
          {errors.h2oFrequency && <ErrorMessage>{errors.h2oFrequency.message}</ErrorMessage>}
        </InputDiv>
            
        <Button type='submit'>Add new plant</Button>

    </Form>
  );
};
