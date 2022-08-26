import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 3em;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    //position: fixed;
    //position: absolute;
    justify-self: center;
    align-self: center;
    background: rgb(203, 153, 153);
    //z-index: 4;
`;

const Form = styled.div``;

export const LoginPopup = () => {
    return <Container>Hello</Container>;
};
