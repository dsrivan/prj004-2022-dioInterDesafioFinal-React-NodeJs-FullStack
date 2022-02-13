import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

import * as S from './Card_styled';
import { ShoppingCart, Info } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
}));

const Card = ({ product, children }) => {
    const cart = useSelector(state => state.cart.value)
    const dispatch = useDispatch();
    const classes = useStyles();

    return (

        <S.OffersItem key={product.id_product}>
            <S.OffersItemImage src={product.image} alt="imagem"></S.OffersItemImage>
            <S.OffersItemCategory>
                {product.name_categorys}
            </S.OffersItemCategory>
            <S.OffersItemTitle>
                {product.name_product}
            </S.OffersItemTitle>
            <S.OffersSeeDescription>
                Product description
            </S.OffersSeeDescription>
            <S.OffersItemDescription className="offersItemDescription">
                {/* {(product.description).toString()} */}
                Not available
            </S.OffersItemDescription>
            <S.OffersItemPrice>
                R$ {parseFloat(product.price).toFixed(2)}
            </S.OffersItemPrice>

            <S.DivOffersItemButton>
                <S.OffersItemButton
                    variant="contained"
                    onClick={() => dispatch(cartActions.Add(cart, product))}
                >
                    <ShoppingCart color="dark" className="noEvents" style={{ marginRight: "10px" }} />
                    Add to cart
                </S.OffersItemButton>
                <Link
                    to={`/product/${product.id_product}`}
                    className="text-decoration-none">
                    <S.OffersItemButton>
                        <Info color="dark" className="noEvents" style={{ marginRight: "10px" }} />
                        Product description
                    </S.OffersItemButton>
                </Link>
            </S.DivOffersItemButton>

        </S.OffersItem>
    )
}

export default Card;
