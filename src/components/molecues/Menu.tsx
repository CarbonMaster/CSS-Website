import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { HamburgerMenuIcon } from "../../components";

const Container = styled.div`
  margin: 20px;
  z-index: 1;
  width: 5%;
  overflow: hidden;
`;

const MenuContent = styled.div`
  transition: all 0.2s;
  z-index: 1;
  background-color: black;
  height: 5rem;
  width: 5rem;
`;

const MenuHidden = styled(MenuContent)`
  transition: all 0.2s;
  background-color: #e81515;
  height: 2rem;
`;

const MenuButtonToOpen = styled.input`
  //position: absolute;
  //left: 5%;
  //top: 5%;
  width: 4em;
  height: 4em;
`;

export const Menu = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <MenuButtonToOpen type={"checkbox"} />
      <HamburgerMenuIcon />
    </Container>
  );
};
