import React from 'react';
import { useSelector } from 'react-redux';
// import { makeStyles } from '@material-ui/core/';
import Card from '../components/Card';

import * as S from './home_styled';
import { ExpandMore } from '@material-ui/icons';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         marginTop: '5px',
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center'
//     },
// }));

const HomePage = () => {
    const products = useSelector(state => state.products)
    // const classes = useStyles();

    const categories = products.map(
        category => {
            const container = {};
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    // const category = categories.map(JSON.stringify)
    //     .filter(function (item, index, arr) {
    //         return arr.indexOf(item, index + 1) === -1;
    //     })
    //     .map(JSON.parse)

    const arrayCategory = categories.map(category => category.name)
    let count = {};

    for (let i = 0; i < arrayCategory.length; i++) {
        let key = arrayCategory[i];
        count[key] = (count[key] ? count[key] + 1 : 1)
    }

    return (
        <S.FullContainer>

            <S.Banner>
                <S.BannerTextsImage>
                    <S.BannerTexts>
                        <S.BannerSubTitle>eStore Shopping</S.BannerSubTitle>
                        <S.BannerTitle>Sports T-shirts</S.BannerTitle>
                        <S.BannerText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, a optio adipisci porro aspernatur dolorem doloribus, dolor nihil voluptates culpa quam illo, pariatur animi.
                        </S.BannerText>
                        <S.BannerButton href="#ourOffers">
                            See our products
                            <ExpandMore />
                        </S.BannerButton>
                    </S.BannerTexts>
                    <S.BannerImage>
                        <S.BannerImageImg src="https://raw.githubusercontent.com/dsrivan/gamaacademy-2021-HiringCoders2-projeto-Desafio01/main/assets/images/mulher'.png"></S.BannerImageImg>
                    </S.BannerImage>
                </S.BannerTextsImage>
            </S.Banner>

            <S.OurOffers id="ourOffers">
                <S.OurOffersTitle>
                    Our Offers
                </S.OurOffersTitle>
            </S.OurOffers>

            <S.Offers>
                {products.map((product, key) => {
                    return (
                        <Card
                            key={product.id_product}
                            product={product}
                        >
                            {product.name_product}
                        </Card>
                    );
                })}
            </S.Offers>

        </S.FullContainer>
    )
}

export default HomePage;
