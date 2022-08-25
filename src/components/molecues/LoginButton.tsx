import styled from '@emotion/styled';

const ButtonContainer = styled.div`
    position: absolute;
`;

const Button = styled.div`
    //display: block;
    cursor: pointer;
    background: linear-gradient(to right bottom, rgba(85, 0, 255, 0.8), rgba(255, 255, 255, 0.8));
    background-size: 100% 100%;
    background-color: black;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 4em;
    font: bold;
    position: relative;
    right: 0%;
    top: 50%;
    border-radius: 1000px;
    z-index: 3;
`;

export const LoginButton = () => {
    return (
        <ButtonContainer>
            <Button>Log in</Button>
        </ButtonContainer>
    );
};
