import React from "react";


//////////////////////////////////////////Create Plant Card --  using props to fill values///////////////////////////////////
const PlantCard = props => {
  return (
    <div className="plant-list">
      {props.plant.map(plant => (
        <div className="recipe-item" key={plant.id}>
          <h3>{plant.nickname}</h3>
          <h3>{plant.species}</h3>
          <h3>{plant.h2oFrequency}</h3>
        </div>
      ))}
    </div>
  );
};
export default PlantCard;
