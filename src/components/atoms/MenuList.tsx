import styled from '@emotion/styled';

const MenuOption = styled.li`
    display: block;
    padding: 10px;
    font-size: 3em;
`;

const List = styled.ul`
    overflow: hidden;
    .a {
        display: block;
        padding: 10px;
    }
`;

export const MenuList = () => {
    return (
        <List>
            <br />
            <MenuOption>Option</MenuOption>
            <MenuOption>Option</MenuOption>
            <MenuOption>Option</MenuOption>
        </List>
    );
};
