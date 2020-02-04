import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddPlantForm from "./components/AddPlantForm";
import LoginPage from "./components/LoginPage";
// import RegistrationForm from "./components/RegistrationForm";
import TestForm from "./components/TestForm";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

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

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" />
          <Route
            path="/plants"
            render={props => (
              <AddPlantForm {...props} addNewPlant={addNewPlant} />
            )}
          />
        </Switch>

        {/* <AddPlantForm /> */}
      </Router>
    </div>
  );
}

export default App;
