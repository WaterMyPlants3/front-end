import styled from "styled-components";

export const AddPlantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  background-color: #bbbbbb;
`;
export const InputContainer = styled.div`
  //   border: 2px solid grey;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3%;
`;

export const RowOneStyling = styled.input`
  width: 40%;
  height: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  font-family: "Lucida Casual", "Comic Sans MS";
  padding: 1.5%;
  border: 1px solid green;
  margin-top: 3%;
  outline: none;

  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const ButtonStyling = styled.button`
  text-align: center;
  background-color: #89cc7c;
  color: white;
  padding: 8px 0px;
  margin: 3%;
  border-radius: 5px;
  font-size: 1rem;
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
