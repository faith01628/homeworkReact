import React from "react";

const SearchProductType = ({ ProductType }) => {
    const searchProductType = (event) => {
        const productType = event.target.value;
        ProductType(productType);
    }

    return (
        <div>
            <form>
                <select id="productTypeSelect" onChange={searchProductType}>
                    <option value="">All products</option>
                    <option value="laptop">Laptop</option>
                    <option value="mobile phone">Mobile Phone</option>
                </select>
            </form>
        </div>
    );
}

export default SearchProductType;
