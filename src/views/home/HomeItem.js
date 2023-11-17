import { useNavigate } from "react-router-dom";

const HomeItem = ({ product, addProduct }) => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <div >
                    <img onClick={() => navigate(`/product/${product.id}`)} src={product.img} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <button onClick={() => addProduct(product)} > Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default HomeItem;