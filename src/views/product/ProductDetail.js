import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ addProduct }) => {
    const { id } = useParams();
    const [product, setProducts] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                //đọc file json thứ nhất
                const dataJson = await fetch('../products.json');
                const data = await dataJson.json();

                //lay book dua vao id
                const selectedProduct = data.find((item) => item.id == id);
                setProducts(selectedProduct);

            } catch (error) {
                console.log('error reading json');
            }
        };
        fetchData();
    }, [id]);

    if (!product) {
        return (
            <>
                <div className="wait">
                    <h1>
                        Loading...
                    </h1>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="ProductDetail-container">

                <div key={product.id}>
                    <div className="product-content-left">
                        <img src={product.img} alt={product.name} />
                        <button onClick={() => addProduct(product)} > Add To Cart</button>
                    </div>
                    <div className="product-content-right">
                        <table>
                            <tr>
                                <td className='key'>
                                    <span>Name: </span>
                                    <span>Price: </span>
                                    <span>Quantity: </span>
                                    <span>Brand: </span>
                                    <span>Product Type: </span>
                                    <span>Description: </span>
                                </td>
                                <td>
                                    <div className="name">{product.name}</div>
                                    <div className="price">{product.price} $</div>
                                    <div className="quantity">{product.quantity}</div>
                                    <div className="brand">{product.brand}</div>
                                    <div className="product_Type">{product.product_type}</div>
                                    <div className="description">{product.description}</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;