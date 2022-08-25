import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { MenuList, HamburgerMenuImage, NavBar } from '../../components';

const Menu = styled.ul`
    background-color: rgba(156, 168, 212, 0.2);
    padding: 30px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    //display: inline-block;
`;

const Button = styled.input`
    //width: 8vw;
    //font-size: 3vh;
    text-align: center;
    //border-width: 0vh;
    background-color: #888888;
    //margin: 2em;
    //border-radius: 1rem;
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

    /* :checked ~ .MenuLabel {
        max-height: 100%;
        transition: all 1s;
    }

    :checked ~ .MenuLabel {
    } */
`;

const MenuLabel = styled.label`
    display: block;
    cursor: pointer;
    background: linear-gradient(to right bottom, rgba(109, 37, 37, 0.8), rgba(76, 0, 200, 0.8));
    //background-size: 100% 100%;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    //position: relative;
    //right: 0%;
    //top: 50%;
    border-radius: 1000px;
`;

const MenuLabelImage = styled.svg`
    background: url('./svg/hamburger.svg') no-repeat center center;
    width: 100%;
    height: 100%;
    background-size: 60%;
`;

const MenuUpperPart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Login = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [isChecked, setIsChecked] = useState(false);
    const image = useRef(null);

    const MenuContent = styled.div<{ isChecked: boolean }>`
        padding: 0 0 0 50px;
        //max-height: 0;
        z-index: 2;

        overflow: hidden;
        max-height: ${isChecked ? '100%' : '0px'};
        transition: all 1s;

        ::${isChecked ? 'after' : 'content'} {
            max-height: ${isChecked ? '100%' : '0px'};
            transition: all 1s;
        }
    `;

    const imageClick = () => {
        const checkbox = ref.current;
        console.log(checkbox);
        checkbox?.click();
        setIsChecked((prev) => !prev);
    };

    return (
        <Menu>
            <MenuUpperPart>
                <Button type={'checkbox'} onChange={() => console.log('Active')} ref={ref} />
                <MenuLabel onClick={imageClick}>
                    <MenuLabelImage />
                </MenuLabel>
                <NavBar />
            </MenuUpperPart>
            <MenuContent isChecked={false}>{isChecked ? <MenuList /> : <MenuList />}</MenuContent>
        </Menu>
    );
};
