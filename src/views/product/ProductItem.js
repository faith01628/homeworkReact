import '../../styles/Product.scss';

const ProductItem = ({ product, addProduct }) => {
    return (
        <>
            <div>
                <div >
                    <img src={product.img} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => addProduct(product)} > Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default ProductItem;