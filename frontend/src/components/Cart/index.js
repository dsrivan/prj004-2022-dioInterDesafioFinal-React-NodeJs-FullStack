import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    let totalPrice = 0;

    for (let i = 0; i < cart.Cart.length; i++) {
        totalPrice += (cart.Cart[i].price * cart.Cart[i].quantity)
    }

    if (cart.value > 0) {
        localStorage.setItem('dioshopping: cart', JSON.stringify(cart))
    }

    return (
        <>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#CartModal">
                <div>
                    <span><i className="fas fa-shopping-cart"></i></span>
                    <span
                        className="badge rounded-pill bg-danger text-light"
                        style={{ position: "absolute", right: "0" }}>
                        {cart.value}
                    </span>
                </div>
            </button>

            {/* Modal */}
            <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                            <button type="button" className="bg-light border-0 close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="far text-dark fa-times-circle fs-4"></i>
                            </button>
                        </div>

                        <div className="modal-body table-responsive">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}>Option</th>
                                        <th scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}>Product</th>
                                        <th scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}>Qtd</th>
                                        <th scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}>Price</th>
                                        <th scope="col" style={{ textAlign: "center", verticalAlign: "middle" }}>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.Cart.map(item => {
                                        return (
                                            <tr key={item.id}>

                                                {/* option */}
                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                    <button onClick={() => dispatch(cartActions.DeleteItem(cart, item))} className="badge bg-light border-0">
                                                        <i className="fas fa-times-circle text-danger fs-4"></i>
                                                    </button>
                                                </td>

                                                {/* Product */}
                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                    <img className="img-fluid img-thumbnail border-0" src={item.image} alt={item.Name} width="50px" />
                                                </td>

                                                {/* Qtd */}
                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                    <button onClick={() => dispatch(cartActions.RemoveItem(cart, item))} className="bg-transparent border-0">
                                                        <i className="fas fa-minus-circle text-secondary"></i>
                                                    </button>
                                                    {item.quantity}
                                                    <button onClick={() => dispatch(cartActions.AddItem(cart, item))} className="bg-transparent border-0">
                                                        <i className="fas fa-plus-circle"></i>
                                                    </button>
                                                </td>

                                                {/* Price */}
                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                    R$ {item.price.toFixed(2)}
                                                </td>

                                                {/* Total */}
                                                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                                                    R$ {(item.price * item.quantity).toFixed(2)}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <th colSpan="2" scope="col">Total</th>
                                        <td colSpan="2">{cart.value} {(cart.value === 1) ? "item" : "items"}</td>
                                        <td colSpan="2">R$ {totalPrice.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;
