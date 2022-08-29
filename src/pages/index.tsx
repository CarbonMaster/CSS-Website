import styled from '@emotion/styled';
import { MainSection, Wrapper, SecondSection } from '../components';

const All = styled.div`
    background-color: rgb(172, 240, 242);
`;

export const Index: React.FC = () => {
    return (
        <All>
            <Wrapper>
                <MainSection />
                <SecondSection />
            </Wrapper>
        </All>
    );
};

export default Index;
