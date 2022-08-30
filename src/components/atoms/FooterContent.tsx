import styled from '@emotion/styled';

const Container = styled.div`
    //height: 100px;
    background-color: #8032fd4e;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 200px 0 200px 0;

    @media (max-width: 600px) {
        flex-direction: column;
        padding: 50px 0 50px 0;
    }
`;

const FooterElement = styled.div`
    font-size: 2em;
    display: flex;
    flex-direction: column;
    width: 50px;
    align-self: center;

    @media (max-width: 600px) {
        padding: 50px;
        transform: translate(-50%, 0);
    }
`;

const Logo = styled.div`
    border-radius: 100px;
    width: 100px;
    content: url(./img/logo.png);

    @media (max-width: 600px) {
        width: 40%;
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
