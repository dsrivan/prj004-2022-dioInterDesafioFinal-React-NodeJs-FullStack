import styled from 'styled-components';

export const Navigation = styled.ul`
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin-bottom: 10px;
`;

export const Logo = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
`;

export const NavigationItem = styled.li`
    display: inline-block;
    align-self: center;
    font-size: 1.1rem;
    margin-left: 1.5rem;
    font-weight: 500;
    color: #111;
    font-weight: 400;
    cursor: pointer;
`;