const HomeItem = ({ product, addProduct }) => {
    return (
        <>
            <div>
                <div >
                    <img src={product.img} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button onClick={() => addProduct(product)} > Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default HomeItem;