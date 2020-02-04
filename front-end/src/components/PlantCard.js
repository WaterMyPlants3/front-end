import React from "react";

const PlantsCard = props => {
  return (
    <div className="plant-list">
      {props.plant.map(plant => (
        <div className="recipe-item" key={plant.id}>
          <h2>{plant.name}</h2>
          <h3>{plant.nickname}</h3>
          <h3>{plant.species}</h3>
          <h3>{plant.h2oFrequency}</h3>
          <button onClick={() => props.plantToEdit(plant)}>Edit</button>
        </div>
      ))}
    </div>
  );
};
export default PlantsCard;
