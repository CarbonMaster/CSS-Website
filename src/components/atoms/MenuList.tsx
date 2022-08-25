import styled from '@emotion/styled';

const MenuOption = styled.li`
    display: block;
    padding: 20px;
    font-size: 3em;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

const List = styled.ul`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    .a {
        display: block;
        padding: 10px;
    }
`;

export const MenuList = () => {
    return (
        <List>
            <MenuOption>Option</MenuOption>
            <MenuOption>Option</MenuOption>
            <MenuOption>Option</MenuOption>
        </List>
    );
};
