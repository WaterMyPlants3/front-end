import React from "react";

const Plants = props => {
  return (
    <div className="plant-list">
      {props.plantd.map(plant => (
        <div className="recipe-item" key={plant.id}>
          <h2>{plant.name}</h2>
          <h3>{plant.nickname}</h3>
          <h3>{plant.species}</h3>
          <h3>{plant.h2oFrequency}</h3>
        </div>
      ))}
    </div>
  );
};
export default Plants;
