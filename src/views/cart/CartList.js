import '../../styles/Cart.scss'
import CartItem from "./CartItem";

const CartList = ({ cart, onDelete, onPayNow }) => {
    if (cart.length === 0) {
        return (
            <div className="cart-no-product">
                <h1>Cart Page</h1>
                <h3>You have no products in your cart</h3>
            </div>
        );
    } else {
        return (
            <div className="Cart-container">
                <h1>Cart Page</h1>
                <div className="cart-item">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Brand</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(cartItem => (
                                <CartItem key={cartItem.id} cart={cartItem} onDelete={onDelete} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button className="paybtn" onClick={onPayNow}>
                        Pay now
                    </button>
                </div>

            </div>
        );
    }
}
export default CartList;