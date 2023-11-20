import React from "react";

const SearchProductType = ({ ProductType }) => {
    const searchProductType = (event) => {
        const productType = event.target.value;
        ProductType(productType);
    }

    return (
        <div className="search-by-type">
            <form>
                <select id="productTypeSelect" onChange={searchProductType}>
                    <option value="">All products</option>
                    <option value="laptop">Laptop</option>
                    <option value="mobile phone">Mobile Phone</option>
                    {/* <option value="product_type">Mobile Phone</option>  -->product_type là trường ở trong file product.json <-- */}
                </select>
            </form>
        </div>
    );
}

export default SearchProductType;
