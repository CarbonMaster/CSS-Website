import styled from "@emotion/styled";
import React, { useRef, useState } from "react";

const Container = styled.div`
  height: 100vh;
`;

const Button = styled.button`
  width: 8vw;
  font-size: 3vh;
  text-align: center;
  border-width: 0vh;
  background-color: #888888;
  margin: 2em;
  border-radius: 1rem;
  transition: all 0.1s;
  color: rgb(0, 0, 0);
  position: absolute;

  :hover {
    background-color: #5e5e5e;
    transform: translate(0, -0.1em);
    transition: all 0.2s;
    text-shadow: 0 10px 20px;
    box-shadow: 0 10px 20px rgba(1, 1, 1, 0.5);
  }

  :active {
    background-color: #333333;
    transform: translate(0, 0em);
    transition: all 0.2s;
  }

  :visited {
    background-color: #0033ff !important;
    transition: all 0.2s;
  }

  :link {
    transition: all 0.2s;
  }

  ::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  :hover::after {
    transform: scale(2);
    z-index: 2;
    color: white;
    transition: all 0.2s;
  }
`;

const MenuHidden = styled.div``;

const Menu = styled.div`
  display: block;
  background-color: black;
`;

export const Login = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Button onClick={() => setIsChecked((prev) => !prev)}>Login</Button>
      {isChecked ? <MenuHidden /> : <Menu />}
    </Container>
  );
};
