import styled from '@emotion/styled';

const MenuOption = styled.li`
    padding: 10px;
    font-size: 3em;
`;

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export const NavBar = () => {
    return (
        <List>
            <MenuOption>Lorum</MenuOption>
            <MenuOption>Lorum</MenuOption>
            <MenuOption>Lorum</MenuOption>
        </List>
    );
};
