import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import { MenuList } from '..';

const Menu = styled.ul`
    //background-color: rgba(156, 168, 212, 0.2);
    padding: 30px;
    //box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    position: fixed;
    width: 100%;
    z-index: 1;
    //display: inline-block;

    @media (min-width: 1000px) {
        display: none;
    }
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
`;

const MenuLabel = styled.label`
    display: block;
    cursor: pointer;
    background: linear-gradient(to right bottom, rgba(85, 0, 255, 0.8), rgba(255, 255, 255, 0.8));
    //background-size: 100% 100%;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    //position: relative;
    //right: 0%;
    //top: 50%;
    border-radius: 1000px;
    position: absolute;
    top: 30%;
    right: 5%;
`;

const MenuLabelImage = styled.svg`
    background: url('./svg/hamburger.svg') no-repeat center center;
    width: 100%;
    height: 100%;
    background-size: 60%;
`;

export const MenuMobile = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [isChecked, setIsChecked] = useState(false);
    const image = useRef(null);

    const imageClick = () => {
        const checkbox = ref.current;
        console.log(checkbox);
        //checkbox?.click();
        setIsChecked((prev) => !prev);
    };

    const MenuContent = styled.div<{ isChecked: boolean }>`
        //padding: 0 0 0 50px;
        //max-height: 0;
        z-index: 2;
        background-color: #aeaeae;
        //width: 50vw;
        //height: 80vh;
        overflow: hidden;
        max-width: 0;
        animation: hideMenu 0.2s ease-in-out;
        visibility: hidden;
        position: fixed;
        top: 15%;
        right: 5%;
        transform: translate(50%, 0);

        @keyframes hideMenu {
            0% {
                max-width: 100%;
                max-height: 100%;
                visibility: visible;
                transform: translate(0, 0);
            }

            100% {
                max-width: 0%;
                max-height: 0%;
                visibility: hidden;
                transform: translate(50%, 0);
            }
        }

        &.enabledMenu {
            transition: all 1s;
            max-width: 100%;
            max-height: 100%;
            visibility: visible;
            transform: translate(0, 0);

            animation: showMenu 0.2s ease-in-out;
            visibility: visible;

            @keyframes showMenu {
                0% {
                    transform: translate(50%, 0);
                    max-width: 0%;
                    max-height: 0%;
                }

                100% {
                    transform: translate(0, 0);
                    max-width: 100%;
                    max-height: 100%;
                }
            }
        }
    `;

    return (
        <Menu>
            <Button type={'checkbox'} onChange={() => console.log('Active')} ref={ref} />
            <MenuLabel onClick={imageClick}>
                <MenuLabelImage />
            </MenuLabel>
            <MenuContent className={isChecked ? 'enabledMenu' : ''} isChecked={isChecked}>
                <MenuList />
            </MenuContent>
        </Menu>
    );
};
