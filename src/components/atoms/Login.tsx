import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { MenuList, HamburgerMenuIcon } from '../../components';

const Menu = styled.ul`
    display: block;
    background-color: rgb(156, 168, 212);
    padding: 0px 30px;
    border-bottom: 3px solid #cde700;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);

    //z-index: 1;
`;

const Button = styled.input`
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
    right: 2%;
    top: 0%;

    display: none;

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
        content: '';
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

    :checked ~ .MenuContent {
        max-height: 100%;
    }

    :checked ~ .MenuLabel {
        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(23, 22, 23, 0.8)),
            url('./img/konon.png') no-repeat center center;
        background-color: red !important;
    }
`;

const MenuLabel = styled.label`
    display: block;
    cursor: pointer;
    background: linear-gradient(to right bottom, rgba(109, 37, 37, 0.8), rgba(76, 0, 200, 0.8)),
        url('./img/konon.png') no-repeat center center;
    background-size: 100% 100%;
    padding: 30px;
    position: absolute;
    right: 2%;
    top: 2%;
`;

const MenuContent = styled.div`
    padding: 0 0 0 50px;
    //max-height: 0;
    z-index: 2;
    overflow: hidden;
`;

const MenuHidden = styled.div`
    height: 10vh;
    overflow: hidden;
`;

export const Login = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [isChecked, setIsChecked] = useState(false);
    const image = useRef(null);

    const imageClick = () => {
        const checkbox = ref.current;
        console.log(checkbox);
        checkbox?.click();
        setIsChecked((prev) => !prev);
    };

    return (
        <Menu>
            <Button type={'checkbox'} onChange={() => console.log('XD')} ref={ref} />
            <MenuLabel onClick={imageClick}>
                <HamburgerMenuIcon />
            </MenuLabel>
            <MenuContent>{isChecked ? <MenuHidden /> : <MenuList />}</MenuContent>
        </Menu>
    );
};
