import styled from '@emotion/styled';
import { FooterContent } from '../../components';

const Container = styled.div``;

const SubText = styled.div`
    font-size: 1.5em;
    background-color: #8032fd4e;
    display: flex;
    justify-content: center;
    color: #858585;
    padding-bottom: 20px;
`;

export const Footer: React.FC = () => {
    return (
        <Container>
            <FooterContent></FooterContent>
            <SubText>Team licenced stuff</SubText>
        </Container>
    );
};
