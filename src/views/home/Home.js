import HomeItem from "./HomeItem";
import '../../styles/Home.scss';

const Home = ({ samsungProduct, iphoneProduct, addProduct }) => {
    return (
        <>
            <div>
                <h1>Home Page</h1>
                <h2>iphone</h2>
                <div className="product-home-item">
                    {iphoneProduct.map(product => (
                        <>
                            <HomeItem key={product.id} product={product} addProduct={addProduct} />
                        </>
                    ))}
                </div>

                <h2>samsung</h2>
                <div className="product-home-item">
                    {samsungProduct.map(product => (
                        <>
                            <HomeItem key={product.id} product={product} addProduct={addProduct} />
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Home;