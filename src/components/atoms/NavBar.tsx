import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { LoginPopup } from '../../components';

const MenuOption = styled.li`
    background-color: rgb(14, 234, 255);
    font-size: 3rem;
    padding: 10px;
    margin: 10px;
    width: 15vw;
    display: flex;
    border-radius: 10px;
    align-content: center;
    justify-content: center;
    :hover {
        background-color: rgb(0, 146, 178);
        //transform: translate(0, -0.1em);
        transition: all 0.2s;
        text-shadow: 0 10px 20px;
        box-shadow: 2px 10px 20px rgba(1, 1, 1, 0.5);
    }

    :active {
        background-color: rgb(1, 40, 64);
        //transform: translate(0, 0em);
        transition: all 0.2s;
        box-shadow: 1px 5px 3px rgba(1, 1, 1, 0.5);
    }
`;

const LoginMenuOption = styled(MenuOption)`
    cursor: pointer;
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const LogInContent = styled.div`
    z-index: 2;
    background-color: #aeaeae;
    background: linear-gradient(to bottom, rgba(41, 98, 255, 0.8), rgba(53, 71, 140, 0.8));
    width: 100vw;
    height: 100vh;
    animation: hideLogin 0.3s ease-in-out;
    visibility: hidden;
    display: flex;
    position: fixed;
    justify-content: center;
    top: 0;
    right: 0;

    opacity: 0;

    @keyframes hideLogin {
        0% {
            visibility: visible;
            opacity: 1;
        }

        100% {
            visibility: hidden;
            opacity: 0;
        }
    }

    &.EnabledLogin {
        //transition: all 1s ease-in-out;
        visibility: visible;
        opacity: 1;
        animation: showLogin 0.3s ease-in-out;
        visibility: visible;

        @keyframes showLogin {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }
`;

export const NavBar = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [DesktopLoginVisible, setIsChecked] = useState(false);
    const image = useRef(null);

    const imageClick = () => {
        const checkbox = ref.current;
        console.log(checkbox);
        setIsChecked((prev) => !prev);
    };
    return (
        <List>
            <LoginMenuOption onClick={imageClick}>
                Login
                <LogInContent className={DesktopLoginVisible ? 'EnabledLogin' : ''}>
                    <LoginPopup />
                </LogInContent>
            </LoginMenuOption>
            <MenuOption>Lorum</MenuOption>
            <MenuOption>Lorum</MenuOption>
        </List>
    );
};
