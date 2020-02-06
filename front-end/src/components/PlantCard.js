import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const CardStyle = styled.div`
  text-align: center;
  border-radius: 10px;
  background-color: #faf0e6;
  color: #487346;
`;

const CardButton = styled.button`
  margin: 2%;
  font-size: 0.8rem;
  background: #487346;
  color: #faf0e6;
  border-radius: 10px;
  &:hover {
    background: #89cc7c;
    color: #487346;
    cursor: pointer;
  }
`;

const initialPlant = {
  id: "",
  // name: "",
  // nickname: "",
  species: ""
  // h2oFrequency: 0
};

const PlantCard = props => {
  const [editing, setEditing] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(initialPlant);

  const editPlant = plant => {
    setEditing(true);
    setPlantToEdit(plant);
  };
  console.log("plant to edit", props.plants);

  useEffect(() => {
    const plantToUpdate = props.plants.find(
      plant => `${plant.id}` === plantToEdit.id
    );
    if (plantToUpdate) {
      setPlantToEdit(plantToUpdate);
    }
  }, []);

  const saveEdit = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(`/api/plants/${plantToEdit.id}`, plantToEdit)
      .then(res => {
        console.log("to edit", res);
        // window.location.reload();
        setEditing(false);
      })
      .catch(err => console.log(err));
  };

  const deletePlant = (e, id) => {
    e.preventDefault();
    console.log("delete button is working", id);

    axiosWithAuth()
      .delete(`/api/plants/${id}`)
      .then(res => {
        console.log("after deleting", res);
        const updatedPlants = props.plants.filter(plant => plant.id !== id);
        props.setPlants(updatedPlants);
      })
      .catch(err => {
        console.log("Error: Delete Request was not returned!", err);
      });
  };

  return (
    <>
      <CardStyle key={props.id}>
        <div className="plant-item" key={props.plant.id}>
          {/* <h3>{props.plant.nickname}</h3> */}
          <h3>Species: {props.plant.species}</h3>
          {/* <h3>{props.plant.h2oFrequency}</h3> */}
          {/* <button onClick={edit}>Edit</button> */}
        </div>
        <span>
          ID:
          {""}
          {props.id}
        </span>
        <div className="buttons">
          <button onClick={e => deletePlant(e, props.plant.id)}>
            Delete Plant
          </button>
          <button key={props.plant.id} onClick={() => editPlant(props.plant)}>
            Update Plant
          </button>
        </div>
      </CardStyle>

      <div className="spacer">
        {editing && (
          <form onSubmit={saveEdit}>
            <legend>edit plant</legend>
            <label>
              plant name:
              <input
                onChange={e =>
                  setPlantToEdit({ ...plantToEdit, species: e.target.value })
                }
                value={plantToEdit.species}
              />
            </label>
            {/* <label>
              Species:
              <input
                onChange={e =>
                  setPlantToEdit({
                    ...plantToEdit,
                    species: e.target.value
                  })
                }
                value={plantToEdit.species}
              />
            </label> */}
            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};
export default PlantCard;
