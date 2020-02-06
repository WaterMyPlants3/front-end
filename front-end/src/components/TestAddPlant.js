import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddRecipeContainer = styled.div`
  border-radius: 10px;
  margin: 3%;
  background-color: #bbbbbb;
`;
const InputContainer = styled.div`
  // border: 2px solid grey;
`;
const RecipeStyling = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 3%;
`;
const RowOneStyling = styled.input`
  width: 28%;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-family: "Lucida Casual", "Comic Sans MS";
  padding: 1.5%;
  border: 1px solid white;
  margin-top: 3%;
  outline: none;

  &:focus {
    outline: none;
  }
`;
const RowTwoStyling = styled.textarea`
  height: 5rem;
  border-radius: 10px;
  font-size: 1.6rem;
  padding: 1.5%;
  margin: 0% 1.5%;
  font-family: "Lucida Casual", "Comic Sans MS";
  border: 1px solid white;
  outline: none;

  &:focus {
    outline: none;
  }
`;
const RowThreeStyling = styled.textarea`
  height: 12rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-family: "Lucida Casual", "Comic Sans MS";
  padding: 1.5%;
  margin: 3% 1.5% 0% 1.5%;
  border: 1px solid white;
  outline: none;

  &:focus {
    outline: none;
  }
`;
const InstructionStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  text-align: center;
`;
export const ButtonStyling = styled.button`
  text-align: center;
  background-color: #22283a;
  color: white;
  padding: 8px 0px;
  margin: 3%;
  border-radius: 5px;
  font-size: 1.9rem;
  font-family: "Lucida Casual", "Comic Sans MS";
  width: 200px;
  border: 2px solid #22283a;
  outline: none;

  &:hover {
    background-color: white;
    color: #22283a;
    animation: shadow-pulse 1s infinite;

    @keyframes shadow-pulse {
      0% {
        box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
      }
      100% {
        box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
      }
    }
  }
`;

const TestAddPlant = () => {
  const [plant, setPlant] = useState({
    // nickname: "",
    species: "",
    //    h2oFrequency: "",
    id: Date.now()
  });

  const addPlant = event => {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/plants`, plant)
      .then(res => {
        console.log("this is the data after then", res);
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleChanges = event => {
    event.preventDefault();
    setPlant({ ...plant, [event.target.name]: event.target.value });
  };

  return (
    <AddRecipeContainer>
      <InputContainer>
        <form onSubmit={event => addPlant(event)}>
          <RowOneStyling
            id="species"
            type="text"
            name="species"
            placeholder="name"
            value={plant.name}
            onChange={handleChanges}
            autoComplete="off"
            border="none"
          />
          {/* <RowOneStyling
            id="species"
            type="text"
            name="nickname"
            placeholder="nickname"
            value={plant.nickname}
            onChange={handleChanges}
            autoComplete="off"
            border="none"
          /> */}

          <ButtonContainer>
            <ButtonStyling type="submit">Add Plant</ButtonStyling>
          </ButtonContainer>
        </form>
      </InputContainer>
    </AddRecipeContainer>
  );
};

export default TestAddPlant;
