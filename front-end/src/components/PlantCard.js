import React from "react";
import { useHistory } from 'react-router-dom';



//////////////////////////////////////////Create Plant Card --  using props to fill values///////////////////////////////////
const PlantCard = props => {


  const history = useHistory();

  function edit() {
    history.push(`/plants/${props.plantID}`);
  };


  return (
    <div className="plant-list">
      {props.plant.map(plant => (
        <div className="recipe-item" key={plant.id}>
          <h3>{plant.nickname}</h3>
          <h3>{plant.species}</h3>
          <h3>{plant.h2oFrequency}</h3>
          <button onClick={edit}>Edit</button>
        </div>
      ))}
    </div>
  );
};
export default PlantCard;
