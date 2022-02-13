import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import * as S from './styles';
import { ShoppingCart, Info } from '@material-ui/icons';

import products from './../../../src/components/store/reducers/product';

import SendIcon from '@material-ui/icons/Send';

const ProductDetails = () => {
    const { id } = useParams();

    const [comments, setComments] = useState([]);
    const [validator, setValidator] = useState(false);
    const [message, setMessage] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [render, setRender] = useState(false);
    const [success, setSuccess] = useState(false);

    const getActualProduct = ({ id_product }) => id_product == id;
    const {
        image,
        name_product,
        price,
        name_categorys
    } = products.filter(getActualProduct)[0];

    const url = 'http://localhost:5000/message'

    useEffect(() => {
        axios
            .get(`${url}/${id}`)
            .then((response) => {
                const data = response.data;
                setComments(data);
            })
    }, [render]);

    const sendMessage = () => {
        setValidator(false);

        if (author.length <= 0 || content.length <= 0) {
            return setValidator(!validator)
        }
        const bodyForm = {
            email: author,
            message: content,
            id_product: id
        }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyForm)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.id) {
                    setRender(true);
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000)
                }
            })

        setAuthor('');
        setContent('');
    }

    const optionDate = {
        year: 'numeric',
        month: 'long',
        weekday: 'long',
        // day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        // era: 'long',
        // timeZoneName: 'long'
    }

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
                            id="message"
                            label="Message"
                            rows={3}
                            maxLength={300}
                            onChange={(event) => { setContent(event.target.value) }}
                            style={{
                                width: "100%",
                                resize: "none",
                                border: "1px solid lightgray",
                                borderRadius: "4px",
                                padding: "10px"
                            }}>
                            {content}
                        </textarea>
                        <small>Tap your best e-mail</small>
                        <input
                            type="email"
                            id="name"
                            label="Name"
                            maxLength={100}
                            value={author} onChange={(event) => { setAuthor(event.target.value) }}
                            style={{
                                width: "100%",
                                resize: "none",
                                border: "1px solid lightgray",
                                borderRadius: "4px",
                                padding: "10px",
                                marginBottom: "20px"
                            }}
                        />

                        {validator &&
                            <div className="alert alert-warning alert-dismissible fade show mt-2" role="alert">
                                <strong>Por favor preencha todos os campos!</strong>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        }

                        {success &&
                            <div className="alert alert-success alert-dismissible fade show mt-2" role="alert">
                                <strong>Mensagem foi enviada</strong>
                            </div>
                        }
                        <button
                            onClick={sendMessage}
                            style={{
                                width: "100%",
                                border: "1px solid lightgray",
                                borderRadius: "4px",
                                padding: "15px 0",
                                marginBottom: "20px",
                                backgroundColor: "#b34c4c",
                                color: "#fff"
                            }}>
                            Send comment
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
                            {comments && comments.map(({ id, email, message, created_at }, key) => {
                                let data = new Date(created_at).toLocaleDateString('pt-br', optionDate)
                                return (
                                    <li key={key}
                                        data-idComment={id}
                                        style={{
                                            width: "100%",
                                            backgroundColor: "#f7f7f7",
                                            borderRadius: "5px",
                                            // border: "1px solid lightgray",
                                            padding: "5px",
                                            marginBottom: "20px"
                                        }}>
                                        <div style={{ padding: "15px" }}>
                                            <p><strong>{email}</strong> said:</p>
                                            <span style={{ paddingLeft: "15px" }}>
                                                {message}
                                            </span>
                                            <p style={{
                                                color: "gray",
                                                fontWeight: "bold",
                                                display: "block",
                                                fontSize: "13px",
                                                marginTop: "10px"
                                            }}>
                                                {/* {
                                                    `${created_at.split('T')[0]} - ${created_at.split('T')[1]}`
                                                } */}
                                                {data}
                                            </p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </S.Row >
        </S.Container >
    )
}

export default ProductDetails;