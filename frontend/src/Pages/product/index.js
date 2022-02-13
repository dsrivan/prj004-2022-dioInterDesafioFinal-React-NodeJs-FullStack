import { React } from 'react';
import { useParams, Link } from "react-router-dom";

import * as S from './styles';
import { ShoppingCart, Info } from '@material-ui/icons';

import products from './../../../src/components/store/reducers/product';

const ProductDetails = () => {
    const { id } = useParams();

    const getActualProduct = ({ id_product }) => id_product == id;
    const {
        image,
        name_product,
        price,
        name_categorys
    } = products.filter(getActualProduct)[0];

    return (
        <S.Container>
            <S.Row>
                <nav className='w-100' aria-label="breadcrumb">
                    <ol className="breadcrumb w-100 p-2 rounded-2" style={{ backgroundColor: "rgb(239, 239, 239)" }}>
                        <li className="breadcrumb-item text-light">
                            <Link className='text-decoration-none' to="/">
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                            Product details
                        </li>
                    </ol>
                </nav>
            </S.Row>
            <S.Row>
                <S.DivImageProduct>
                    <S.ImageProduct
                        src={`${image.replace('.', '')}`}
                        alt="imagem"
                    >
                    </S.ImageProduct>
                </S.DivImageProduct>
                <S.DivDetailsProduct>
                    <div style={{
                        padding: "20px 10px"
                    }}>
                        <p style={{ fontWeight: "bold", color: "gray" }}>{name_categorys}</p>
                        <h1>{name_product}</h1>
                        <h2>Price: {price.toFixed(2)}</h2>
                    </div>
                    <div>
                        <S.OffersItemButton>
                            <ShoppingCart color="dark" className="noEvents" style={{ marginRight: "10px" }} />
                            Add to cart
                        </S.OffersItemButton>
                    </div>
                </S.DivDetailsProduct>

            </S.Row>
        </S.Container>
    )
}

export default ProductDetails;