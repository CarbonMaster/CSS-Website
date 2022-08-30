import { SiteNav, Footer } from '../../components';
import styled from '@emotion/styled';

const Children = styled.div`
    display: flex;
    flex-direction: column;
`;

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <>
            <SiteNav />
            <Children>{children}</Children>
            <Footer />
        </>
    );
};
