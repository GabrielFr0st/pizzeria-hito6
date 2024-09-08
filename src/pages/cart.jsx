import React, { useContext, useMemo } from 'react';
import { CartContext } from '../context/cartcontext'; 

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext); 
    const total = useMemo(() => {
        return cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);
    }, [cart]);

    return (
        <div className="cart-container">
            {cart.length > 0 ? (
                cart.map(({ id, image, name, price, quantity }) => (
                    <div key={id} className="cart-item">
                        <img src={image} alt={name} className="cart-item-img" />
                        <h3>{name}</h3>
                        <p>Precio: ${price}</p>
                        <p>Cantidad: {quantity}</p>
                        <button className="btn btn-outline-success" onClick={() => increaseQuantity(id)}>+</button>
                        <button className="btn btn-outline-danger" onClick={() => decreaseQuantity(id)}>-</button>
                        <button className="btn btn-outline-danger" onClick={() => removeFromCart(id)}>Eliminar</button>
                    </div>
                ))
            ) : (
                <p>No tienes pizzas en el carrito aún.</p>
            )}
            <p><strong>Total:</strong> ${total.toLocaleString()}</p>
            <button className="btn btn-primary">Pagar</button>
        </div>
    );
};

export default Cart;
