import React, { useState, useEffect, useRef } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import { ButtonStyling } from "../styled/formStyled";
import { gsap } from "gsap";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  background-color: #3aafa9;
`;
const InputStyling = styled.input`
  width: 50%;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-family: "Lucida Casual", "Comic Sans MS";
  padding: 1.5%;
  border: 2px solid white;
  outline: none;
  margin-top: 3%;

  &:focus {
    outline: none;
  }
`;
const RegisterLinkStyling = styled.div`
  font-size: 1.2rem;
  margin-bottom: 3%;
  outline: none;
`;

function TestForm(props) {
  const [values, setValues] = useState({
    username: "",
    password: ""
  });
  const handleChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "api/auth/login",
        `grant_type=password&username=${values.username}&password=${values.password}`
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        props.history.push("/plants");
      })
      .catch(err => console.log(err.response));
  };

  let userBox = useRef(null);
  let passwordBox = useRef(null);
  let submitBox = useRef(null);
  let registerBox = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      userBox,
      2,
      {
        opacity: 0,
        x: -130
      },
      {
        opacity: 1,
        x: 0
      }
    );

    gsap.fromTo(
      passwordBox,
      1.5,
      {
        opacity: 0,
        x: -130
      },
      {
        opacity: 1,
        x: 0
      }
    );

    gsap.fromTo(
      submitBox,
      1,
      {
        opacity: 0,
        x: -130
      },
      {
        opacity: 1,
        x: 0
      }
    );

    gsap.fromTo(
      registerBox,
      0.5,
      {
        opacity: 0,
        x: -130
      },
      {
        opacity: 1,
        x: 0
      }
    );
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <InputStyling
            ref={e => (userBox = e)}
            name="username"
            value={values.username}
            placeholder="username"
            onChange={handleChange}
          />
          <InputStyling
            ref={e => (passwordBox = e)}
            name="password"
            value={values.password}
            placeholder="password"
            onChange={handleChange}
          />
          <ButtonStyling type="submit" ref={e => (submitBox = e)}>
            Submit
          </ButtonStyling>
          <RegisterLinkStyling ref={e => (registerBox = e)}>
            Not a member? <Link to="./register">Register here!</Link>
          </RegisterLinkStyling>
        </InputContainer>
      </form>
    </div>
  );
}
export default TestForm;
