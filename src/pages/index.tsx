import styled from '@emotion/styled';
import { MainSection, MenuDesktop, Wrapper } from '../components';

const All = styled.div``;

export const Index: React.FC = () => {
    return (
        <All>
            <Wrapper>
                <MainSection />
                <MainSection />
            </Wrapper>
        </All>
    );
};

export default Index;
