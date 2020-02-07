import React, { useState, useContext } from "react";
import { PlantCardContext } from "../utils/context";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { AppTitle } from "../styled/StyledComponents_LoginForm";

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
  nickName: "",
  species: "",
  h2oFrequency: 0
};

const PlantCard = props => {
  const cardContext = useContext(PlantCardContext);
  const [editing, setEditing] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(initialPlant);
  console.log(cardContext);
  const editPlant = plant => {
    setEditing(true);
    setPlantToEdit(plant);
  };

  // useEffect(() => {
  //   const plantToUpdate = cardContext.find(
  //     plant => `${plant.id}` === plantToEdit.id
  //   );
  //   if (plantToUpdate) {
  //     setPlantToEdit(plantToUpdate);
  //   }
  // }, []);

  const saveEdit = event => {
    event.preventDefault();
    axiosWithAuth()
      .put(`/api/plants/`, plantToEdit)
      .then(res => {
        console.log("to edit", res);
        setEditing(false);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <CardStyle key={cardContext.id}>
        <div className="plant-item" key={cardContext.id}>
          {/* <h3>{cardContext.nickname}</h3> */}
          <h3>Species: {cardContext.species}</h3>
          <h3>Nick Name: {cardContext.nickName}</h3>
          <h3>Weekly watering: {cardContext.h2oFrequency} </h3>
          {/* <h3>{props.plant.h2oFrequency}</h3> */}
          {/* <button onClick={edit}>Edit</button> */}
        </div>
        <span>
          ID:
          {""}
          {cardContext.id}
        </span>
        <div className="buttons">
          <button
            onClick={e =>
              props.deletePlant(e, cardContext.users_plants, cardContext.id)
            }
          >
            Delete Plant
          </button>
          <button key={cardContext.id} onClick={() => editPlant(cardContext)}>
            Update Plant
          </button>
        </div>
      </CardStyle>

      <div className="spacer">
        {editing && (
          <form onSubmit={saveEdit}>
            <AppTitle>edit plant</AppTitle>
            <label>
              Species:
              <input
                onChange={e =>
                  setPlantToEdit({ ...plantToEdit, species: e.target.value })
                }
                value={plantToEdit.species}
              />
            </label>
            <label>
              Nickname:
              <input
                onChange={e =>
                  setPlantToEdit({
                    ...plantToEdit,
                    nickname: e.target.value
                  })
                }
                value={plantToEdit.nickName}
              />
            </label>
            <label>
              Water Frequency:
              <input
                onChange={e =>
                  setPlantToEdit({
                    ...plantToEdit,
                    h2oFrequency: e.target.value
                  })
                }
                value={plantToEdit.h2oFrequency}
              />
            </label>
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
