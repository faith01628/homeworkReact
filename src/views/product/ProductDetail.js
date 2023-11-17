import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addProduct, onClickProduct }) => {
    const { id } = useParams();
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch('../products.json')
            .then((response) => response.json())
            .then((data) => {
                const selectedProduct = data.find((item) => item.id === id);
                setProducts(selectedProduct);
            })
            .catch((error) => console.log('error reading json', error));
    }, [id]);
    console.log("check product detail", product)
    if (!product) {
        return <>
            <div>Loading...</div>
        </>
    }
    return (
        <>
            <div className="body">
                <div>
                    <img onClick={() => onClickProduct(product.id)} src={product.img} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Description{product.description}</p>
                    <p>{product.brand}</p>
                    <p>{product.product_type}</p>
                    <button onClick={() => addProduct(product)} > Add To Cart</button>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;