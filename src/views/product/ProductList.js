import ProductItem from './ProductItem';

const ProductList = ({ products, addProduct }) => {
    return (
        <>
            <div>
                <h1>Prodcut Page</h1>
                <div className="product-item">
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} addProduct={addProduct} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default ProductList;