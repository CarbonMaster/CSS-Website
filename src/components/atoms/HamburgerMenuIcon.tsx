import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';

const Container = styled.label`
    margin: 20px 0;
    z-index: 0;
`;

export const HamburgerMenuIcon = () => {
    return (
        <Container>
            <span></span>
            <span></span>
            <span></span>
        </Container>
    );
};
