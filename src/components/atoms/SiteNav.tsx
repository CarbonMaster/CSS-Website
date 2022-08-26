import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Container = styled.div`
    display: fixed;
    position: fixed;
    top: 0;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 10px;
    background-color: #40a6ff7f;
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
    background-color: rgba(0, 87, 102, 0.846);
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
    background-color: #40a6ff7f;
    top: 0;
    right: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    margin: 10vh 0px;

    animation: showMenu 0.2s ease;

    @keyframes showMenu {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    &.visible {
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
    padding: 5vw;
    margin: 5%;
    background-color: rgba(0, 96, 113, 0.753);
    border-radius: 30px;
    width: 30vw;
    overflow: hidden;
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
    background-color: rgba(0, 47, 55, 0.753);
`;

const LoginWholeContainer = styled.div`
    background: rgba(0, 107, 107, 0.7);
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

const LoginExitButtonContainer = styled.div`
    cursor: pointer;
    content: url(./svg/x.svg);
    border-radius: 100px;
    width: 10%;
    align-self: flex-end;
    z-index: 2;
    box-shadow: 0px 0px 0px 3px black;
    //margin: 1em;
    background-color: rgba(0, 87, 102, 0.846);
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 3em;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    position: fixed;
    justify-self: center;
    align-self: center;
    background: rgb(4, 191, 191);
    z-index: 4;
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

const DataVerify = Yup.object().shape({
    email: Yup.string().email().required(),
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

    return (
        <>
            <Container>
                <Logo />
                <HamburgerMenu onClick={() => setMenuVisible((prev) => !prev)}>
                    {menuOpen ? <XImage /> : <HamburgerImage />}
                </HamburgerMenu>
            </Container>
            <MenuContainer className={menuOpen ? 'visible' : ''}>
                <MenuList>
                    <MenuOption>Section</MenuOption>
                    <MenuOption>Section</MenuOption>
                    <MenuOption onClick={() => setLoginVisible((prev) => !prev)}>Login</MenuOption>
                </MenuList>
            </MenuContainer>
            <LoginWholeContainer className={loginOpen ? 'visible' : ''}>
                <LoginContainer>
                    <LoginExitButtonContainer onClick={() => setLoginVisible((prev) => !prev)} />
                    <LoginTitle>Log in</LoginTitle>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={async (values) => {
                            console.log(values);
                        }}
                        validationSchema={DataVerify}
                    >
                        <Form>
                            <InputsContainers>
                                <InputField id="email" name="email" placeholder="E-mail" type="email" />
                                <InputField id="password" name="password" placeholder="Password" type="password" />
                                <SubmitButton type="submit">Login</SubmitButton>
                            </InputsContainers>
                        </Form>
                    </Formik>
                </LoginContainer>
            </LoginWholeContainer>
        </>
    );
};
