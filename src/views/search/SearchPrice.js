import { useState } from "react";
import '../../styles/Search.scss'

const SearchPrice = ({ searchPrice }) => {
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');

    const handleSearchByPrice = (event) => {
        event.preventDefault();
        const valueSearchPrice = { min, max };
        searchPrice(valueSearchPrice)
    }
    return (
        <>
            <div className='Search-By-Price'>
                <form onSubmit={handleSearchByPrice}>
                    <input type="number" className='mim' value={min} onChange={(event) => setMin(event.target.value)} placeholder='Enter min price' />
                    <input type="number" className='max' value={max} onChange={(event) => setMax(event.target.value)} placeholder='Enter max price' />
                    <button>Find</button>
                </form>
            </div>
        </>
    )
}
export default SearchPrice;