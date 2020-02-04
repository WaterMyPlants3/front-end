import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddPlantForm from "./components/AddPlantForm";
import LoginPage from './components/LoginPage';
import "./App.css";
import UpdatePlantForm from "./components/UpdatePlantForm";
import PlantList from './components/PlantList';

function App() {
  const [plant, setPlant] = useState([
    {
      id: 1,
      nickname: "indoor plant",
      species: "undefined",
      h2oFrequency: "once a week"
    },
    {
      id: 2,
      nickname: "indoor plant",
      species: "undefined",
      h2oFrequency: "once a week"
    },
    {
      id: 3,
      nickname: "indoor plant",
      species: "undefined",
      h2oFrequency: "once a week"
    }
  ]);
  const addNewPlant = rec => {
    const newPlant = {
      ...rec,
      id: Date.now()
    };
    setPlant([...plant, newPlant]);
  };

  const [editPlant, setEditPlant] = useState({
    name: '',
    nickname: '',
    species: '',
    h2oFrequency: ''
  });

  const plantToEdit = (plant) => {
    const editPlant = {
      id: plant.id,
      name: plant.name,
      nickname: plant.nicname,
      species: plant.species,
      h2oFrequency: plant.h2oFrequency
    }
    setEditPlant(editPlant);
  };

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <UpdatePlantForm />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" render={props => (
            <PlantList {...props} plantToEdit={plantToEdit} />
          )}/>
          <Route path="/register" />
          <Route
            path="/plants"
            render={props => (
              <AddPlantForm {...props} addNewPlant={addNewPlant} />
            )}
          />
          <Route path="/plants/:plantid" render={props => (
            <UpdatePlantForm {...props} />)} />
        </Switch>
        <AddPlantForm />
      </Router>
    </div>
  );
}

export default App;
