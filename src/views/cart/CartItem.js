const CartItem = ({ cart, onDelete }) => {
    return (
        <tr>
            <td><img src={cart.img} alt="img" width="100px" /></td>
            <td>{cart.name}</td>
            <td>{cart.price * cart.quantity}</td>
            <td>{cart.quantity}</td>
            <td>{cart.brand}</td>
            <td><button onClick={() => onDelete(cart.id)}>Delete</button></td>
        </tr>
    )
}
export default CartItem;