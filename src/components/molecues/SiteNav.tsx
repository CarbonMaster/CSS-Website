import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useOnClickOutside } from '@/src/hooks';

const Container = styled.div`
    display: fixed;
    position: fixed;
    top: 0;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 10px;
    background-color: #4f1ea17f;
    width: 100%;
`;

const HamburgerMenu = styled.div`
    cursor: pointer;
    display: flex;
    border-radius: 100px;
    height: 40px;
    width: 40px;
`;

const Logo = styled.div`
    border-radius: 100px;
    height: 100%;
    z-index: 2;
    content: url(./img/konon.png);
`;

const HamburgerImage = styled.div`
    border-radius: 100px;
    z-index: 2;
    content: url(./svg/hamburger.svg);
    background-color: #cebcecc9;
    padding: 5px;
`;

const XImage = styled(HamburgerImage)`
    content: url(./svg/x.svg);
`;

const MenuContainer = styled.div`
    flex-direction: column;
    position: fixed;
    display: flex;
    opacity: 0;
    top: 0;
    right: 0;
    z-index: 0;
    margin: 10vh 0vw;
    transform: translate(100%, 0);

    animation: showMenu 0.2s ease;

    @keyframes showMenu {
        0% {
            opacity: 0;
            transform: translate(100%, 0);
        }
        100% {
            opacity: 1;
            transform: translate(0, 0);
        }
    }
    &.visible {
        transform: translate(0, 0);
        z-index: 1;
        opacity: 1;
    }
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: flex-end;
    align-items: flex-end;
    align-self: flex-end;

    background-color: #4e1ea1e5;
    overflow: hidden;

    @media (min-width: 1000px) {
        padding: 50px 50px 10px 50px;
        width: 150px;
    }
`;

const MenuOption = styled.div`
    font: bold;
    margin: 0.5em;
    padding: 0.5em;
    border-radius: 10px;
    width: 100px;
    display: flex;
    justify-content: flex-end;
    font-size: 2em;
    font-weight: 600;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.8);
    cursor: pointer;
    background-color: #8032fdb7;

    @media (max-width: 1000px) {
        border-radius: 5px;
        width: 100%;
        font-size: 3em;
    }
`;

const LoginWholeContainer = styled.div`
    background: #2f135be0;
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 0;
    opacity: 0;

    animation: showLogin 0.2s ease;

    @keyframes showLogin {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    &.visible {
        z-index: 2;
        opacity: 1;
    }
`;

const RegisterWholeContainer = styled(LoginWholeContainer)`
    background: #2e135be0;
`;

const ExitButtonContainer = styled.div`
    cursor: pointer;
    content: url(./svg/x.svg);
    border-radius: 100px;
    width: 20px;
    align-self: flex-end;
    z-index: 2;
    box-shadow: 0px 0px 0px 1px black;
    background-color: #8032fd82;
`;

const MenuExitButtonContainer = styled(ExitButtonContainer)`
    transform: translate(50%, -50%);
    scale: 200%;
    background-color: #cebcecc9;

    @media (max-width: 800px) {
        display: none;
    }
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 3em;
    box-shadow: 0px 0px 30px #f2f3f638;
    position: fixed;
    justify-self: center;
    align-self: center;
    background: #b991f8;
    z-index: 4;
`;

const RegisterContainer = styled(LoginContainer)`
    padding: 40px;
    border-radius: 20px;
`;

const LoginTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 15px;
    align-self: center;
    text-shadow: 0px 0px 3px rgba(0, 48, 90, 0.8);
`;

const InputsContainers = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubmitButton = styled.button`
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border-color: rgb(1, 255, 247);
    box-shadow: 0px 0px 2px 2px rgb(173, 213, 247);

    ::hover {
        transform: all 2s;
        box-shadow: 0px 0px 2px 2px rgb(0, 48, 90);
    }
`;

const LoginDataVerify = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

const RegisterDataVerify = Yup.object().shape({
    email: Yup.string().email().required(),
    name: Yup.string().required(),
    password: Yup.string().required(),
});

const InputField = styled(Field)`
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
`;

export const SiteNav: React.FC = () => {
    const [menuOpen, setMenuVisible] = useState(false);
    const [loginOpen, setLoginVisible] = useState(false);
    const [registerOpen, setRegisterVisible] = useState(false);
    const menu = useRef(null);
    const login = useRef(null);
    const register = useRef(null);

    const closemenu = () => {
        {
            menuOpen ? setMenuVisible((prev) => !prev) : '';
        }
        console.log('clicked outside');
    };
    useOnClickOutside(menu, closemenu);

    const closelogin = () => {
        setLoginVisible((prev) => false);
        console.log('clicked outside');
    };
    useOnClickOutside(login, closelogin);

    const closeregister = () => {
        setRegisterVisible((prev) => false);
        console.log('clicked outside');
    };
    useOnClickOutside(register, closeregister);

    return (
        <>
            <Container>
                <Logo />
                <HamburgerMenu onClick={() => setMenuVisible((prev) => !prev)}>
                    {menuOpen ? <XImage /> : <HamburgerImage />}
                </HamburgerMenu>
            </Container>
            <MenuContainer className={menuOpen ? 'visible' : ''}>
                <MenuList ref={menu}>
                    <MenuExitButtonContainer onClick={() => setMenuVisible((prev) => !prev)} />
                    <MenuOption
                        onClick={() => {
                            closemenu();
                        }}
                    >
                        Section
                    </MenuOption>
                    <MenuOption
                        onClick={() => {
                            closemenu();
                        }}
                    >
                        Section
                    </MenuOption>
                    <MenuOption
                        onClick={() => {
                            setLoginVisible((prev) => !prev);
                            closemenu();
                        }}
                    >
                        Login
                    </MenuOption>
                    <MenuOption
                        onClick={() => {
                            setRegisterVisible((prev) => !prev);
                            closemenu();
                        }}
                    >
                        Register
                    </MenuOption>
                </MenuList>
            </MenuContainer>
            <LoginWholeContainer className={loginOpen ? 'visible' : ''}>
                <LoginContainer ref={login}>
                    <ExitButtonContainer onClick={() => setLoginVisible((prev) => !prev)} />
                    <LoginTitle>Log in</LoginTitle>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={async (values) => {
                            console.log(values);
                        }}
                        validationSchema={LoginDataVerify}
                    >
                        <Form>
                            <InputsContainers>
                                <InputField id="email" name="email" placeholder="E-mail" type="email" />
                                <InputField id="password" name="password" placeholder="Password" type="password" />
                                <SubmitButton type="submit">Login</SubmitButton>
                            </InputsContainers>
                        </Form>
                    </Formik>
                    <SubmitButton
                        onClick={() => {
                            setRegisterVisible((prev) => !prev);
                            closelogin();
                        }}
                    >
                        Register
                    </SubmitButton>
                </LoginContainer>
            </LoginWholeContainer>
            <RegisterWholeContainer className={registerOpen ? 'visible' : ''}>
                <RegisterContainer ref={register}>
                    <ExitButtonContainer onClick={() => setRegisterVisible((prev) => !prev)} />
                    <LoginTitle>Register</LoginTitle>
                    <Formik
                        initialValues={{
                            email: '',
                            name: '',
                            password: '',
                        }}
                        onSubmit={async (values) => {
                            console.log(values);
                        }}
                        validationSchema={RegisterDataVerify}
                    >
                        <Form>
                            <InputsContainers>
                                <InputField id="email" name="email" placeholder="E-mail" type="email" />
                                <InputField id="name" name="name" placeholder="Name" type="name" />
                                <InputField id="password" name="password" placeholder="Password" type="password" />
                                <SubmitButton type="submit">Register</SubmitButton>
                            </InputsContainers>
                        </Form>
                    </Formik>
                </RegisterContainer>
            </RegisterWholeContainer>
        </>
    );
};
