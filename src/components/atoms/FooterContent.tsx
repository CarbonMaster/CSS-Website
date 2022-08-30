import styled from '@emotion/styled';

const Container = styled.div`
    background-color: #8032fd4e;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 100px 50px 100px 0px;

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 50px 0 50px 0;
        align-items: center;
    }
`;

const FooterElement = styled.div`
    font-size: 2em;
    display: flex;
    flex-direction: column;
    width: 50px;
    align-self: center;
    padding: 20px;

    @media (max-width: 600px) {
        padding: 50px;
        transform: translate(-50%, 0);
        font-size: 3em;
    }
`;

const Logo = styled.div`
    border-radius: 50px;
    width: 100px;
    content: url(./img/logo.png);

    @media (max-width: 600px) {
        width: 35%;
    }
`;

const Link = styled.div``;

export const FooterContent: React.FC = () => {
    return (
        <Container>
            <Logo />
            <FooterElement>Studio:</FooterElement>
            <FooterElement>Games:</FooterElement>
            <FooterElement>Kontakt: 123456789</FooterElement>
        </Container>
    );
};
