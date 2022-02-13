import styled from 'styled-components';

export const OffersItem = styled.div`
    border-radius: 4px;
    padding: 1.5rem 1rem;
    border: 1px solid;
    border-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    transition: all .2s ease-in-out;
    position: relative;
    overflow: hidden;
    
    &:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        border-color: rgba(0,0,0,0.1);

        & img {
            transform: scale(1.2);
        }
    }
`;

export const OffersItemImage = styled.img`
    width: 80%;
    height: auto;
    text-align: center;
    min-height: 160px;
    position: relative;
    overflow: hidden;
    transition: all .2s ease-in-out;
    
    @media screen and (max-width: 529px) {
        width: 50%;
    }
`;

export const OffersItemCategory = styled.p`
    font-size: 0.7rem;
    margin: 1.5rem 1rem 0 1rem;
    font-weight: 700;
    color: #b34c4c;
    text-transform: uppercase;
    z-index: 2;
    background-color: #fff;
    `;

export const OffersItemTitle = styled.p`
    font-size: 1rem;
    margin: .5rem 1rem 1rem;
    font-weight: 700;
`;

export const OffersSeeDescription = styled.p`
    font-size: 0.7rem;
    cursor: pointer;

    &:hover ~ .offersItemDescription {
    transform: translateX(0%) !important;
    opacity: 1 !important;
    }
`;

export const OffersItemDescription = styled.p`
    font-size: 0.89rem;
    color: #ececec;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    /* height: 345px; */
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 24px;
    padding: 1rem;
    border-radius: 8px;
    transform: translateX(100%);
    opacity: 0;
    transition: all .3s ease-in-out;
    z-index: 3;
`;

export const OffersItemPrice = styled.p`
    font-size: 1.2rem;
    margin: 1rem 1rem 0 1rem;
    font-weight: 700;
`;

export const DivOffersItemButton = styled.div`
    text-align: center;
    width: 100%;
    `;

export const OffersItemButton = styled.button`
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
    margin: 1rem 0;
    font-size: 12px;
    transition: all .2s ease-in-out;
    
    &:first-child {
        background-color: #b34c4c;
        border-color: #b34c4c;
        color: #fff;
        
        &:hover {
            background-color: #842828;
            border-color: #842828;
        }
    }
    
    &:last-child {
        width: 100%;
        background-color: #efefef;
        border-color: #efefef;
        color: #111;
        
        &:hover {
            background-color: #c6c6c6;
            border-color: #c6c6c6;
        }
    }

`;