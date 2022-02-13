import { React } from 'react';
import { useParams, Link } from "react-router-dom";

import * as S from './styles';
import { ShoppingCart, Info } from '@material-ui/icons';

import products from './../../../src/components/store/reducers/product';

import SendIcon from '@material-ui/icons/Send';

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
            <S.Row style={{ marginBottom: "30px" }}>
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
            <S.Row style={{ marginBottom: "20px" }}>
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
                        <h2>$ {price.toFixed(2)}</h2>
                        <p style={{ margin: "30px 0" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, a optio adipisci porro aspernatur dolorem doloribus, dolor nihil voluptates culpa quam illo, pariatur animi exercitationem officia iste voluptatem voluptate. Laudantium.
                        </p>
                    </div>
                    <div>
                        <S.OffersItemButton>
                            <ShoppingCart color="dark" className="noEvents" style={{ marginRight: "10px" }} />
                            Add to cart
                        </S.OffersItemButton>
                    </div>
                </S.DivDetailsProduct>

            </S.Row>

            <S.Row style={{ marginBottom: "30px" }}>
                <div
                    style={{
                        width: "100%"
                    }}
                >
                    <div style={{ textAlign: "center", margin: "50px 0 30px 0" }}>
                        <p>what people are saying</p>
                        <h3>
                            Leave your opinion about this product too
                        </h3>
                    </div>
                    <div>
                        <small>Tap your comment below</small>
                        <textarea
                            rows={3}
                            maxLength={300}
                            style={{
                                width: "100%",
                                resize: "none",
                                border: "1px solid lightgray",
                                borderRadius: "4px",
                                padding: "4px"
                            }}
                        ></textarea>
                        <small>Tap your best e-mail</small>
                        <input
                            type="mail"
                            maxLength={100}
                            style={{
                                width: "100%",
                                resize: "none",
                                border: "1px solid lightgray",
                                borderRadius: "4px",
                                padding: "4px",
                                marginBottom: "20px"
                            }}
                        />
                        <button
                            style={{
                                width: "100%",
                                border: "1px solid lightgray",
                                borderRadius: "4px",
                                padding: "10px 0",
                                marginBottom: "20px",
                                backgroundColor: "#b34c4c",
                                color: "#fff"
                            }}>
                            Send your comment
                            <SendIcon style={{ marginLeft: "20px" }} />
                        </button>


                    </div>
                    <div style={{
                        margin: "50px 0 20px 0"
                    }}>
                        <p>Comments</p>
                    </div>
                    <div style={{
                        margin: "20px 0"
                    }}>
                        <ul style={{ listStyle: "none", padding: "0" }}>
                            <li
                                style={{
                                    width: "100%",
                                    // border: "1px solid lightgray",
                                    backgroundColor: "#f7f7f7",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    marginBottom: "20px"
                                }}>
                                <div>
                                    <p><strong>Fulano@email.com</strong> said:</p>
                                    <span style={{ marginLeft: "10px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tenetur facilis similique quasi aliquid at in doloribus odit ullam quis fugit voluptatibus optio temporibus obcaecati, repudiandae amet!
                                    </span>
                                    <p style={{ color: "gray", fontWeight: "bold", display: "block", fontSize: "13px", marginTop: "10px" }}>2022/02/13 13:05</p>
                                </div>
                            </li>
                            <li
                                style={{
                                    width: "100%",
                                    // border: "1px solid lightgray",
                                    backgroundColor: "#f7f7f7",
                                    borderRadius: "5px",
                                    padding: "5px",
                                    marginBottom: "20px"
                                }}>
                                <div>
                                    <p><strong>Fulano@email.com</strong> said:</p>
                                    <span style={{ marginLeft: "10px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tenetur facilis similique quasi aliquid at in doloribus odit ullam quis fugit voluptatibus optio temporibus obcaecati, repudiandae amet!
                                    </span>
                                    <p style={{ color: "gray", fontWeight: "bold", display: "block", fontSize: "13px", marginTop: "10px" }}>2022/02/13 13:05</p>
                                </div>
                            </li>
                            <li
                                style={{
                                    width: "100%",
                                    // border: "1px solid lightgray",
                                    backgroundColor: "#f7f7f7",
                                    borderRadius: "5px",
                                    border: "1px solid lightgray",
                                    borderRadius: "4px",
                                    padding: "5px",
                                    marginBottom: "20px"
                                }}>
                                <div>
                                    <p><strong>Fulano@email.com</strong> said:</p>
                                    <span style={{ marginLeft: "10px" }}>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta tenetur facilis similique quasi aliquid at in doloribus odit ullam quis fugit voluptatibus optio temporibus obcaecati, repudiandae amet!
                                    </span>
                                    <p style={{ color: "gray", fontWeight: "bold", display: "block", fontSize: "13px", marginTop: "10px" }}>2022/02/13 13:05</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </S.Row >
        </S.Container >
    )
}

export default ProductDetails;