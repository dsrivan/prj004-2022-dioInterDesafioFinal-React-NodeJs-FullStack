import styled from 'styled-components';

const maxWidth = "1200px";

export const FullContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Container = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    height: 100px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Navbar = styled.nav`
`;

export const Navigation = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;

export const NavigationItem = styled.li`
    font-size: 1.1rem;
    margin-left: 1.5rem;
    font-weight: 500;
    cursor: pointer;
`;

export const Banner = styled.div`
    width: 100%;
`;

export const BannerTextsImage = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    padding: 1rem 2rem;
    margin: 0 auto;
    display: grid;
    grid-template-areas: 'BannerTexts BannerImage BannerImage';
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;

    @media screen and (max-width: 768px) {
    grid-template-areas: 
    'BannerImage'
    'BannerTexts';
    }
`;

export const BannerTexts = styled.div`
    grid-area: BannerTexts;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3rem 1rem;
`;

export const BannerSubTitle = styled.h3`
    font-size: .8rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #b34c4c;
`;

export const BannerTitle = styled.h2`
    font-size: 3rem;
    font-weight: 900;

    @media screen and (max-width: 529px) {
        font-size: 2rem;
    }
`;

export const BannerText = styled.p`
    font-size: .9rem;
    font-weight: 300;
    margin: 0 0 2rem 0;
    color: gray;
`;

export const BannerButton = styled.a`
    display: inline;
    padding: 1rem 2rem;
    width: 220px;
    background-color: #b34c4c;
    border-radius: 4px;
    border: 1px solid;
    border-color: #b34c4c;
    color: #fff;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        color: #fff;
        background-color: #842828;
        border-color: #842828;
        box-shadow: 5px 5px 10px rgba(0,0,0,.5);
    }
`;

export const BannerImage = styled.div`
    grid-area: BannerImage;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

export const BannerImageImg = styled.img`
    width: 100%;
    height: auto;
`;

export const OurOffers = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    height: 100px;
    margin: 0 auto;
    text-align: center;
    padding: 3rem 0 2rem;
`;

export const OurOffersTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    position: relative;
    display: flex;
    justify-content: center;

    &::after {
        content: '';
        position: absolute;
        width: 80px;
        height: 4px;
        background-color: #b34c4c;
        bottom: -9px;
        border-radius: 4px;
    }
`;

export const Offers = styled.div`
    width: 100%;
    max-width: ${maxWidth};
    margin: 0 auto;
    padding: 1rem 1rem 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media screen and (max-width: 999px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 529px) {
        grid-template-columns: 100%;
    }
`;

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
    display: block;
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
        background-color: #efefef;
        border-color: #efefef;
        color: #111;
        
        &:hover {
            background-color: #c6c6c6;
        }
    }

`;