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
    background: linear-gradient(to right bottom, rgba(85, 0, 255, 0.8), rgba(255, 255, 255, 0.8));
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
`;

const LogInContent = styled.div`
    z-index: 2;
    background-color: #aeaeae;
    background: linear-gradient(to right bottom, rgba(22, 176, 128, 0.8), rgba(144, 65, 65, 0.8));
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
