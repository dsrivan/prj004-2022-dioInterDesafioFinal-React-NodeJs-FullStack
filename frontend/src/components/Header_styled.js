import styled from 'styled-components';

export const Logo = styled.h1`
font-size: 1.8rem;
font-weight: 700;
`;

export const Navigation = styled.ul`
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`;

export const NavigationItem = styled.li`
    display: inline-block;
    font-size: 1.1rem;
    margin-left: 1.5rem;
    font-weight: 500;
    color: #111;
    cursor: pointer;
`;