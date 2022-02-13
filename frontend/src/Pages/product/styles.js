import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: inherit;
    border: 1px dashed pink;

    &:nth-child(1),
    &:nth-child(2) {
        border: none;
    }
`;

export const DivImageProduct = styled.div`
    width: 50%;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const DivDetailsProduct = styled.div`
    align-items: flex-start;
    width: 50%;
    /* border: 1px dashed green; */
    
    @media screen and (max-width: 768px) {
        width: 100% !important;
    }
`;

export const ImageProduct = styled.img`
    width: 100%;
    /* max-width: 60%; */
    
    @media screen and (max-width: 768px) {
        max-width: 100% !important;
    }
`;

export const OffersItemButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
    margin: 1rem 0;
    transition: all .2s ease-in-out;
    
    &:first-child {
        background-color: #111;
        border-color: #111;
        color: #fff;
        
        &:hover {
            background-color: #842828;
            border-color: #842828;
        }
    }

`;