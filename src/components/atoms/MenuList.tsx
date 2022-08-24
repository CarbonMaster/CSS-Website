import styled from '@emotion/styled';

const MenuOption = styled.li`
    display: block;
    padding: 10px;
    font-size: 3em;
`;

const List = styled.ul`
    list-style-type: none;
    height: 50vh;
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    .a {
        display: block;
        padding: 10px;
        text-decoration: none;
    }
`;

export const MenuList = () => {
    return (
        <List>
            <br />
            <MenuOption>a</MenuOption>
            <MenuOption>a</MenuOption>
            <MenuOption>a</MenuOption>
        </List>
    );
};
