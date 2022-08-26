import { MenuDesktop, MenuMobile } from '../../components';
import styled from '@emotion/styled';

const Children = styled.div`
    display: flex;
    flex-direction: column;
`;

interface WrapperProps {
    children: React.ReactNode;
}

const WrapperItself = styled.div`
    //display: flex;
    //flex-direction: column;
    //position: relative;
    //overflow: clip;
`;

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <>
            <WrapperItself>
                <MenuDesktop />
                <MenuMobile />
            </WrapperItself>
            <Children>{children}</Children>
        </>
    );
};
