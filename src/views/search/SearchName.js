const SearchName = ({ onSearch, searchValue }) => {
    return (
        <>
            <div className="search-by-name">
                <input type="text" value={searchValue} placeholder="Search By Name" onChange={(e) => onSearch(e.target.value)} />
            </div>
        </>
    )
}
export default SearchName;