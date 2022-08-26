import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { LoginPopup } from '../../components';

const Container = styled.div`
    position: absolute;
    //width: 100%;
    //height: 100%;
`;

const Button = styled.input`
    display: none;
`;

const LoginLabel = styled.div`
    cursor: pointer;
    background: linear-gradient(to right bottom, rgba(89, 216, 230, 0.8), rgba(14, 234, 255, 0.8));
    background-size: 100% 100%;
    background-color: black;
    padding: 10px;
    font-size: 4em;
    font: bold;
    border-radius: 1000px;
    z-index: 3;
    display: block;
    position: fixed;
    top: 4%;
    left: 5%;

    :hover {
        box-shadow: 0 10px 20px rgba(1, 1, 1, 0.5);
        transform: translate(0, -0.1em);
        transition: all 0.2s;
    }

    :active {
        box-shadow: 0 5px 3px rgba(26, 26, 26, 0.5);
        transform: translate(0, 0em);
        transition: all 0.1s;
    }
`;

const LogInContent = styled.div`
    z-index: 2;
    background-color: #aeaeae;
    background: linear-gradient(to bottom, rgba(41, 98, 255, 0.8), rgba(53, 71, 140, 0.8));
    width: 100vw;
    height: 105vh;
    animation: hideLogin 0.3s ease-in-out;
    visibility: hidden;
    display: flex;
    position: fixed;
    justify-content: center;

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

export const LoginButton = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [isChecked, setIsChecked] = useState(false);
    const image = useRef(null);

    const imageClick = () => {
        const checkbox = ref.current;
        console.log(checkbox);
        setIsChecked((prev) => !prev);
    };

    return (
        <Container>
            <Button type={'checkbox'} onChange={() => console.log('Active')} ref={ref} />
            <LoginLabel onClick={imageClick}>Log in</LoginLabel>
            <LogInContent className={isChecked ? 'EnabledLogin' : ''}>
                <LoginPopup />
            </LogInContent>
        </Container>
    );
};
