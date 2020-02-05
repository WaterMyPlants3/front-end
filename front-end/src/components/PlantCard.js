import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const CardStyle = styled.div`
  text-align: center;
  border-radius: 10px;
  background-color: #FAF0E6;
  color: #487346;
`;

const CardButton = styled.button`
  margin: 2%;
  font-size: .8rem;
  background: #487346;
  color: #FAF0E6;
  border-radius: 10px;
  &:hover {
    background: #89CC7C;
    color: #487346;
    cursor: pointer;
  }
`;

const initialPlant = {
  id: "",
  name: "",
  nickname: "",
  species: "",
  h2oFrequency: 0
};

const PlantCard = props => {
  const [editing, setEditing] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(initialPlant);

  const editPlant = plant => {
    setEditing(true);
    setPlantToEdit(plant);
  };

  const saveEdit = event => {
    axiosWithAuth()
      .put(`/api/plants/${plantToEdit.id}`, plantToEdit)
      .then(res => {
        console.log(res.data);
        props.plants.map(p => {
          if (p.id === plantToEdit.id) {
            setPlantToEdit({
              [event.target.name]: event.target.value
            });
          }
        });
      })
      .catch(err => console.log(err));
  };

  const deletePlant = plant => {
    axiosWithAuth()
      .delete(`//api/plants/${plant.id}`)
      .then(res => {
        console.log("after deleting", res);
        const deletedPlant = props.plants.filter(
          plant => plant.id !== plant.id
        );
        props.setPlants(deletedPlant);
      });
  };

  //   const history = useHistory();

  //   function edit() {
  //     history.push(`/plants/${props.plantID}`);
  //   };

  return (
    <CardStyle key={props.id} onClick={() => editPlant(props.plant)}>
      <div className="recipe-item" key={props.plant.id}>
        {/* <h3>{props.plant.nickname}</h3> */}
        <h3>{props.plant.species}</h3>
        {/* <h3>{props.plant.h2oFrequency}</h3> */}
        {/* <CardButton onClick={edit}>Edit</CardButton> */}
      </div>
      <span>
        <span
          className="delete"
          onClick={e => {
            e.stopPropagation();
            deletePlant(props.plant);
          }}
        >
          X
        </span>
        {""}
        {props.id}
      </span>
      <div className="buttons">
        <CardButton onClick={() => props.deletePlant(props.plant.id)}>
          Delete Plant
        </CardButton>
        <CardButton onClick={() => props.selectPlant(props.plant)}>
          Update Plant
        </CardButton>
      </div>
    </CardStyle>
  );
};
export default PlantCard;
